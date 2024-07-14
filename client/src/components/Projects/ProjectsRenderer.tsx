/* GLOBAL */
import { useEffect } from 'react'
import { useQuery } from 'react-query/src'

/* PROJECT */
import Loading from '../reuseable/Loading'
import ProjectPage from './ProjectPage'
import ProjectsMenu from './ProjectsMenu'

/* TYPES */
import { Images } from '../../scripts/images'

const fetchProjects = async () => {
  const res = await fetch('http://localhost:8000/api/projects')
  return res.json()
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
const ProjectsRenderer = (props: {
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

  if (isLoading) return <Loader openContainer={props.openContainer} />

  if (error) return <Error openContainer={props.openContainer} error={error} />

  const mobile = props.getWindowWidth() < 800

  const menuProps = {
    mobile,
    projects: data,
    handleProjectClick: props.handleProjectClick,
    images: props.images.heros,
  }

  const activeProject = data[props.activeIndex]
  const nextProject =
    props.activeIndex === data.length - 1
      ? data[0]
      : data[props.activeIndex + 1]
  const prevProject =
    props.activeIndex === 0
      ? data[data.length - 1]
      : data[props.activeIndex - 1]

  const projectProps = {
    mobile,
    project: activeProject,
    nextProject: nextProject.title,
    prevProject: prevProject.title,
    projectsLength: data.length,
    images: props.images.projects[props.activeIndex],
    heros: props.images.heros,
    getWindowHeight: props.getWindowHeight,
    getWindowWidth: props.getWindowWidth,
    handleNavigateProjects: props.handleNavigateProjects,
  }

  return props.showMenu ? (
    <ProjectsMenu {...{ ...menuProps }} />
  ) : (
    <ProjectPage {...{ ...projectProps }} />
  )
}

export default ProjectsRenderer
