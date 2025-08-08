'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Calendar, MapPin, Award, Code, Zap } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '50+', label: 'Projects Completed' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate full-stack developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full blur-xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center">
                    <User className="w-32 h-32 text-primary-400" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Full Stack Developer & UI/UX Enthusiast
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating 
                innovative web solutions. I specialize in modern JavaScript frameworks like React and 
                Node.js, with a strong focus on performance, scalability, and user experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity about how things work on the web. 
                Today, I build complex applications that solve real-world problems, always keeping 
                the end-user experience at the forefront of my development process.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Born: January 15, 1995</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Location: San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Experience: 5+ Years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Freelance: Available</span>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 