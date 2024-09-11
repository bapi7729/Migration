'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FeatureModal from './FeatureModal';
import { 
  FaUserCheck, FaDatabase, FaShieldAlt, FaHeartbeat, FaComments, 
  FaExclamationTriangle, FaBriefcase, FaPlane, FaRoute, FaUsers, 
  FaChartBar, FaBullhorn, FaGraduationCap, FaHandshake, 
  FaArrowLeft, FaCalendarAlt, FaVideo, 
  FaPhone, FaSitemap, FaSearch, FaGavel, FaUserSecret, 
  FaChartLine, FaBell, FaTools, FaCogs, FaStore, 
  FaBuilding, FaFileContract, FaBus, FaGlobe, 
  FaLanguage, FaHospital, FaCertificate, FaExchangeAlt, FaHeart, 
  FaProjectDiagram, FaClipboardCheck, FaFileAlt, FaBalanceScale, 
  FaLaptop, FaBook, FaIdCard, FaSync, FaHistory,
  FaListAlt, FaCheckCircle, FaCalculator, FaUpload, FaLink, FaSchool, 
  FaUtensils, FaStar, FaCloudSun, FaMoneyBillWave, 
  FaUserTie, FaHardHat, FaBookOpen, 
  FaUserFriends, FaBed, FaMapMarked, FaPhoneVolume, 
  FaUserGraduate, FaRocket, FaChartPie, FaRobot, 
  FaShareAlt, FaMapMarkerAlt
} from 'react-icons/fa';

const features = [
  {
    id: 1,
    title: 'Unified Migration Registry',
    description: 'Centralized database for migrant registration and tracking.',
    icon: FaUserCheck,
    image: '/images/Unified Migration Registry.jpg',
    subFeatures: [
      { name: 'Digital registration forms', icon: FaDatabase },
      { name: 'e-Shramik Samadhan integration', icon: FaLink },
      { name: 'Unique ID generation', icon: FaIdCard },
      { name: 'Real-time updating capability', icon: FaSync },
      { name: 'Data validation by community leaders', icon: FaCheckCircle },
      { name: 'Family linkage and history tracking', icon: FaHistory },
      { name: 'Aadhaar integration', icon: FaShieldAlt }
    ]
  },
  {
    id: 2,
    title: 'Skills and Livelihoods Database',
    description: 'Comprehensive skill mapping and job matching system.',
    icon: FaBriefcase,
    image: '/images/Skills and Livelihoods Database.jpeg',
    subFeatures: [
      { name: 'Comprehensive skill mapping tool', icon: FaTools },
      { name: 'Government skill program integration', icon: FaHandshake },
      { name: 'Skill gap analysis', icon: FaChartBar },
      { name: 'Job matching algorithm', icon: FaProjectDiagram },
      { name: 'Job opportunity listings', icon: FaListAlt },
      { name: 'Skill certification system', icon: FaCertificate },
      { name: 'Career progression tracking', icon: FaChartLine }
    ]
  },
  {
    id: 3,
    title: 'Social Security and Entitlements Hub',
    description: 'Manage and track social security benefits and entitlements.',
    icon: FaShieldAlt,
    image: '/images/Social Security and Entitlements Hub.jpeg',
    subFeatures: [
      { name: 'e-Shram portal integration', icon: FaLink },
      { name: 'One Nation One Ration Card linkage', icon: FaIdCard },
      { name: 'Welfare scheme application system', icon: FaFileAlt },
      { name: 'Entitlement status tracking', icon: FaSearch },
      { name: 'Benefit calculation and eligibility checker', icon: FaCalculator },
      { name: 'Document upload and verification', icon: FaUpload },
      { name: 'Scheme renewal reminders', icon: FaBell }
    ]
  },
  {
    id: 4,
    title: 'Health and Education Tracker',
    description: 'Monitor health status and educational continuity of migrants.',
    icon: FaHeartbeat,
    image: '/images/Health and Education Tracker.jpeg',
    subFeatures: [
      { name: 'ICDS, NHM, and SSA database linkage', icon: FaLink },
      { name: 'Immunization and health check-up scheduler', icon: FaCalendarAlt },
      { name: 'Education continuity monitoring', icon: FaGraduationCap },
      { name: 'School admission assistance', icon: FaSchool },
      { name: 'Telemedicine consultation booking', icon: FaVideo },
      { name: 'Health record management', icon: FaDatabase },
      { name: 'Nutrition monitoring', icon: FaUtensils }
    ]
  },
  {
    id: 5,
    title: 'Grievance Redressal and Support System',
    description: 'Efficient system for addressing migrant grievances and providing support.',
    icon: FaComments,
    image: '/images/Grievance Redressal and Support System.jpeg',
    subFeatures: [
      { name: 'Shramik Sahayata helpline integration', icon: FaPhone },
      { name: 'Multi-level escalation matrix', icon: FaSitemap },
      { name: 'Case tracking and resolution updates', icon: FaSearch },
      { name: 'Legal aid service connections', icon: FaGavel },
      { name: 'Counseling service scheduler', icon: FaCalendarAlt },
      { name: 'Anonymous reporting option', icon: FaUserSecret },
      { name: 'Resolution quality feedback', icon: FaStar }
    ]
  },
  {
    id: 6,
    title: 'Early Warning System for Distress Migration',
    description: 'Predict and prevent distress migration through early intervention.',
    icon: FaExclamationTriangle,
    image: '/images/Early Warning System for Distress Migration.jpeg',
    subFeatures: [
      { name: 'Environmental stress indicators', icon: FaCloudSun },
      { name: 'Economic distress markers', icon: FaMoneyBillWave },
      { name: 'Alert generation for potential distress', icon: FaBell },
      { name: 'Intervention planning tools', icon: FaTools },
      { name: 'Resource allocation recommendation', icon: FaCogs }
    ]
  },
  {
    id: 7,
    title: 'Local Opportunity Creator',
    description: 'Connect migrants with local employment and entrepreneurship opportunities.',
    icon: FaBriefcase,
    image: '/images/Local Opportunity Creator.jpeg',
    subFeatures: [
      { name: 'MGNREGA work listing and application', icon: FaHardHat },
      { name: 'Micro-entrepreneurship opportunities', icon: FaStore },
      { name: 'Skill development course catalog', icon: FaBookOpen },
      { name: 'Local job fair announcements', icon: FaBullhorn },
      { name: 'Apprenticeship and internship programs', icon: FaUserTie },
      { name: 'Government scheme matcher', icon: FaHandshake }
    ]
  },
  {
    id: 8,
    title: 'Safe Migration Pathway',
    description: 'Ensure secure and well-managed migration processes.',
    icon: FaRoute,
    image: '/images/Safe Migration Pathway.jpg',
    subFeatures: [
      { name: 'Verified employer database', icon: FaBuilding },
      { name: 'Secure contract management', icon: FaFileContract },
      { name: 'Transportation assistance booking', icon: FaBus },
      { name: 'Accommodation finder', icon: FaBed },
      { name: 'Journey tracking for safety', icon: FaMapMarked },
      { name: 'Document vault', icon: FaDatabase }
    ]
  },
  {
    id: 9,
    title: 'Destination Support Network',
    description: 'Provide comprehensive support for migrants at their destination.',
    icon: FaUsers,
    image: '/images/Destination Support Network.jpeg',
    subFeatures: [
      { name: 'Migrant support center locator', icon: FaMapMarkerAlt },
      { name: 'Emergency contact system', icon: FaPhoneVolume },
      { name: 'Cultural integration resources', icon: FaGlobe },
      { name: 'Local language crash courses', icon: FaLanguage },
      { name: 'Peer support group formation', icon: FaUserFriends },
      { name: 'Health facility mapping', icon: FaHospital }
    ]
  },
  {
    id: 10,
    title: 'Return and Reintegration Assistance',
    description: 'Support migrants in their return and reintegration process.',
    icon: FaArrowLeft,
    image: '/images/Return and Reintegration Assistance.jpeg',
    subFeatures: [
      { name: 'Skill certification for returnees', icon: FaCertificate },
      { name: 'Local re-employment support', icon: FaHandshake },
      { name: 'Psychosocial support services', icon: FaHeart },
      { name: 'Reverse migration opportunities', icon: FaExchangeAlt },
      { name: 'Reintegration program enrollment', icon: FaUserGraduate },
      { name: 'Entrepreneurship support', icon: FaRocket }
    ]
  },
  {
    id: 11,
    title: 'Data Analytics and Reporting',
    description: 'Advanced analytics for informed decision-making and policy development.',
    icon: FaChartBar,
    image: '/images/Data Analytics and Reporting.jpeg',
    subFeatures: [
      { name: 'Migration trend analysis dashboard', icon: FaChartLine },
      { name: 'Predictive modeling for distress', icon: FaProjectDiagram },
      { name: 'Impact assessment tools', icon: FaClipboardCheck },
      { name: 'Custom report generator', icon: FaFileAlt },
      { name: 'Data visualization tools', icon: FaChartPie },
      { name: 'Machine learning pattern recognition', icon: FaRobot },
      { name: 'Policy effectiveness evaluator', icon: FaBalanceScale }
    ]
  },
  {
    id: 12,
    title: 'Training and Capacity Building',
    description: 'Comprehensive training programs for migrants, officials, and community leaders.',
    icon: FaGraduationCap,
    image: '/images/Training and Capacity Building 2.jpeg',
    subFeatures: [
      { name: 'Pre-departure orientation', icon: FaPlane },
      { name: 'E-learning platform', icon: FaLaptop },
      { name: 'Social media integration', icon: FaShareAlt },
      { name: 'Virtual workshop scheduler', icon: FaCalendarAlt },
      { name: 'Community discussion forum', icon: FaComments },
      { name: 'Resource library', icon: FaBook }
    ]
  }
];

export default function FeaturesGrid() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedFeature(feature)}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <feature.icon className="mr-2" />
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </motion.div>
      ))}
      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </div>
  );
}