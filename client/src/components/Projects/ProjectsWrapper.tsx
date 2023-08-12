/* GLOBAL */
import { useQuery } from 'react-query/src'

/* PROJECT */
// import Projects from './Projects'
import Loading from '../reuseable/Loading'
import ProjectPage from './ProjectPage'
import ProjectsMenu from './ProjectsMenu'

/* TYPES */
import { Images } from '../Landing/Landing'
import { Project } from './Projects'

/**
 * @description - wrapper for Projects - makes the first query to the DB for projects
 * @param props
 * @returns
 */
const ProjectsWrapper = (props: {
  showMenu: boolean
  activeIndex: number
  // changeActiveIndex: (index: number) => void
  // activeProject: Project | undefined
  images: Images
  getWindowHeight: () => number
  getWindowWidth: () => number
  // handleProjectClick: (project: any, index: number) => void
  handleProjectClick: (index: number) => void
  openContainer: () => void
  handleNavigateProjects: (direction: number, length: number) => void
  // images: {
  //   [key: string]: string
  // }
}) => {
  const fetchProjects = async () => {
    const res = await fetch('http://localhost:8000/api/projects')
    return res.json()
  }

  const { isLoading, data, error } = useQuery(['projects'], fetchProjects)

  /** @TODO what to do with this??? */
  const getCard = (index: number): string => {
    switch (index) {
      case 0:
        return 'one'
      case 1:
        return 'two'
      case 2:
        return 'three'
      case 3:
        return 'four'
      case 4:
        return 'five'
      case 5:
        return 'six'
      case 6:
        return 'seven'
      case 7:
        return 'eight'
    }
    return 'error'
  }

  const renderMenu = () => {
    return (
      <ProjectsMenu
        mobile={props.getWindowWidth() < 800}
        // projects={props.projects}
        projects={data}
        handleProjectClick={props.handleProjectClick}
        images={props.images.heros}
        // openContainer={openContainer}
      />
    )
  }

  const renderPage = () => {
    const activeProject = data[props.activeIndex]
    const nextProject =
      props.activeIndex === data.length - 1
        ? data[0]
        : data[props.activeIndex + 1]
    const prevProject =
      props.activeIndex === 0
        ? data[data.length - 1]
        : data[props.activeIndex - 1]
    return (
      <ProjectPage
        // activeIndex={props.activeIndex}
        project={activeProject}
        nextProject={nextProject.title}
        prevProject={prevProject.title}
        // project={data[props.activeIndex]}
        // prevProject={data[props.activeIndex - 1].title}
        // nextProject={data[props.activeIndex + 1].title}
        projectsLength={data.length}
        images={props.images.projects[props.activeIndex]}
        heros={props.images.heros}
        responsive={false}
        card={getCard(props.activeIndex)}
        getWindowHeight={props.getWindowHeight}
        getWindowWidth={props.getWindowWidth}
        handleNavigateProjects={props.handleNavigateProjects}
      />
    )
  }

  const renderActiveContent = () => {
    if (props.showMenu) return renderMenu()
    else return renderPage()
  }

  if (isLoading) {
    props.openContainer()
    return (
      <div style={{ margin: '50px auto' }}>
        <Loading size={'small'} />
      </div>
    )
  }
  if (error) {
    console.log(error)
    props.openContainer()
    return (
      <div style={{ margin: '50px 0', textAlign: 'center' }}>
        There was an error loading project data.
      </div>
    )
  }

  return renderActiveContent()
}

export default ProjectsWrapper
