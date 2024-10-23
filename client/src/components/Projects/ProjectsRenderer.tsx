/* GLOBAL */
import { useEffect } from 'react'
import { useQuery } from 'react-query/src'

/* PROJECT */
import Loading from '../reuseable/Loading'
import ProjectPage from './ProjectPage'
import ProjectsMenu from './ProjectsMenu'

/* TYPES */
import { Images } from '../../scripts/getImages'
import { Project } from './Projects'

const fetchProjects = async () => {
  // const res = await fetch('http://localhost:8000/api/projects')
  return (await fetch('http://localhost:8000/api/projects')).json() as Promise<
    Array<Project>
  >
  // return res.json()
}

const Loader = (props: { openContainer: () => void }) => {
  useEffect(() => {
    props.openContainer()
  }, [])
  return (
    <div style={{ margin: 'auto', height: '70vh' }}>
      <Loading size={'large'} />
    </div>
  )
}

const Error = (props: { error: unknown; openContainer: () => void }) => {
  useEffect(() => {
    console.log(props.error)
    props.openContainer()
  }, [])
  return (
    <div style={{ margin: '50px 0', textAlign: 'center' }}>
      There was an error loading project data.
    </div>
  )
}

/**
 * @description - wrapper for Projects - makes the first query to the DB for projects
 * @param props
 * @returns
 */
const ProjectsRenderer = ({
  showMenu,
  activeIndex,
  images,
  getWindowHeight,
  getWindowWidth,
  handleProjectClick,
  openContainer,
  handleNavigateProjects,
}: {
  showMenu: boolean
  activeIndex: number
  images: Images
  getWindowHeight: () => number
  getWindowWidth: () => number
  handleProjectClick: (index: number) => void
  openContainer: () => void
  handleNavigateProjects: (direction: number, length: number) => void
}) => {
  const { isLoading, data, error } = useQuery(['projects'], fetchProjects)

  if (isLoading) return <Loader openContainer={openContainer} />

  if (error) return <Error openContainer={openContainer} error={error} />

  if (data) {
    const projects = data.toReversed()
    const mobile = getWindowWidth() < 800

    const menuProps = {
      mobile,
      projects,
      handleProjectClick,
      images: images.heros,
    }

    const activeProject = projects[activeIndex]

    const nextProject =
      activeIndex === projects.length - 1
        ? projects[0]
        : projects[activeIndex + 1]

    const prevProject =
      activeIndex === 0
        ? projects[projects.length - 1]
        : projects[activeIndex - 1]

    const projectProps = {
      mobile,
      project: activeProject,
      nextProject: nextProject.title,
      prevProject: prevProject.title,
      projectsLength: projects.length,
      images: images.projects[activeIndex],
      heros: images.heros,
      getWindowHeight,
      getWindowWidth,
      handleProjectClick,
      handleNavigateProjects,
    }

    return showMenu ? (
      <ProjectsMenu {...{ ...menuProps }} />
    ) : (
      <ProjectPage {...{ ...projectProps }} />
    )
  }
}

export default ProjectsRenderer
