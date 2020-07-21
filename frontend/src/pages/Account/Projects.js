import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProjectCard from '../../components/ProjectCard'
import Body from '../../components/ProjectCard/components/Body'

const marginRight = '2rem'

const useStyles = makeStyles((theme) => ({
  projects: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  card: {
    [theme.breakpoints.up('md')]: {
      flexBasis: `calc(50% - ${marginRight})`,
      marginRight,
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: `calc(32% - ${marginRight})`,
    },
    marginBottom: '3.25rem',
  },
}))

const renderProject = (classes) => (projectData, index) => (
  <ProjectCard
    className={classes.card}
    key={index}
    body={<Body project={projectData} />}
  ></ProjectCard>
)

const renderProjects = (projects, classes) =>
  projects.map(renderProject(classes))

export default function Projects({ projects }) {
  const classes = useStyles()
  return (
    <div className={classes.projects}>
      {projects && renderProjects(projects, classes)}
    </div>
  )
}
