'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code, 
  Globe, 
  Smartphone,
  Database,
  Zap
} from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'fullstack', label: 'Full Stack' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Globe,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Code,
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A comprehensive fitness tracking mobile application with workout plans, progress analytics, and social features.',
      image: '/api/placeholder/400/300',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Smartphone,
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with video calling, file sharing, and group chat functionality.',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Zap,
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      description: 'An interactive data analytics dashboard with real-time data visualization and reporting capabilities.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Database,
    },
    {
      id: 6,
      title: 'Restaurant Management System',
      description: 'A comprehensive restaurant management system with order processing, inventory management, and customer analytics.',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Globe,
    },
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  )

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-primary-500/30' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary-400" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 