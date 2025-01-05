import add_icon from "./assets_admin/add_icon.svg";
import admin_logo from "./assets_admin/admin_logo.svg";
import appointment_icon from "./assets_admin/appointment_icon.svg";
import cancel_icon from "./assets_admin/cancel_icon.svg";
import doctor_icon from "./assets_admin/doctor_icon.svg";
import home_icon from "./assets_admin/home_icon.svg";
import people_icon from "./assets_admin/people_icon.svg";
import upload_area from "./assets_admin/upload_area.svg";
import list_icon from "./assets_admin/list_icon.svg";
import tick_icon from "./assets_admin/tick_icon.svg";
import appointments_icon from "./assets_admin/appointments_icon.svg";
import earning_icon from "./assets_admin/earning_icon.svg";
import patients_icon from "./assets_admin/patients_icon.svg";

import appointment_img from "./assets_frontend/appointment_img.png";
import header_img from "./assets_frontend/header_img.png";
import group_profiles from "./assets_frontend/group_profiles.png";
import profile_pic from "./assets_frontend/profile_pic.png";
import contact_image from "./assets_frontend/contact_image.png";
import about_image from "./assets_frontend/about_image.png";
import logo from "./assets_frontend/logo.svg";
import logo_transparent from './assets_frontend/logo-transparent.png'
import dropdown_icon from "./assets_frontend/dropdown_icon.svg";
import menu_icon from "./assets_frontend/menu_icon.svg";
import cross_icon from "./assets_frontend/cross_icon.png";
import chats_icon from "./assets_frontend/chats_icon.svg";
import verified_icon from "./assets_frontend/verified_icon.svg";
import arrow_icon from "./assets_frontend/arrow_icon.svg";
import info_icon from "./assets_frontend/info_icon.svg";
import upload_icon from "./assets_frontend/upload_icon.png";
import stripe_logo from "./assets_frontend/stripe_logo.png";
import razorpay_logo from "./assets_frontend/razorpay_logo.png";
import doc1 from "./assets_frontend/doc1.png";
import doc2 from "./assets_frontend/doc2.png";
import doc3 from "./assets_frontend/doc3.png";
import doc4 from "./assets_frontend/doc4.png";
import doc5 from "./assets_frontend/doc5.png";
import doc6 from "./assets_frontend/doc6.png";
import doc7 from "./assets_frontend/doc7.png";
import doc8 from "./assets_frontend/doc8.png";
import doc9 from "./assets_frontend/doc9.png";
import doc10 from "./assets_frontend/doc10.png";
import doc11 from "./assets_frontend/doc11.png";
import doc12 from "./assets_frontend/doc12.png";
import doc13 from "./assets_frontend/doc13.png";
import doc14 from "./assets_frontend/doc14.png";
import doc15 from "./assets_frontend/doc15.png";
import Dermatologist from "./assets_frontend/Dermatologist.svg";
import Gastroenterologist from "./assets_frontend/Gastroenterologist.svg";
import General_physician from "./assets_frontend/General_physician.svg";
import Gynecologist from "./assets_frontend/Gynecologist.svg";
import Neurologist from "./assets_frontend/Neurologist.svg";
import Pediatricians from "./assets_frontend/Pediatricians.svg";

export const assets = {
  add_icon,
  admin_logo,
  appointment_icon,
  cancel_icon,
  doctor_icon,
  upload_area,
  home_icon,
  patients_icon,
  people_icon,
  list_icon,
  tick_icon,
  appointments_icon,
  earning_icon,
  appointment_img,
  header_img,
  group_profiles,
  logo,
  logo_transparent,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General Physician",
    image: General_physician,
    description:
      "Experts in diagnosing and treating a wide range of everyday health concerns and medical conditions.",
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
    description:
      "Specialists in women’s health, focusing on reproductive health, pregnancy, and childbirth.",
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
    description:
      "Experts in skin, hair, and nail care, treating conditions like acne, eczema, and skin infections.",
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
    description:
      "Doctors specializing in the health and development of infants, children, and adolescents.",
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
    description:
      "Specialists in treating disorders of the brain, spinal cord, and nervous system.",
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
    description:
      "Experts in diagnosing and treating conditions related to the digestive system, including the stomach and intestines.",
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James specializes in preventive medicine and chronic disease management, offering personalized care for all age groups.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Emily Larson focuses on women’s reproductive health, including prenatal care, childbirth, and gynecological disorders.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Sarah Patel offers advanced treatments for skin conditions like acne, eczema, and hair loss using modern techniques.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christopher Lee is dedicated to promoting the health and development of children through comprehensive pediatric care.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Garcia is a specialist in diagnosing and treating disorders of the brain, spine, and nervous system.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Andrew Williams provides expert care for patients with neurological conditions such as migraines and epilepsy.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Christopher Davis emphasizes holistic care, focusing on preventive health and effective management of illnesses.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Timothy White is skilled in treating complex gynecological conditions and ensuring women’s health and well-being.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Ava Mitchell specializes in providing advanced dermatological treatments for skin rejuvenation and care.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jeffrey King is committed to offering quality healthcare tailored to meet the unique needs of young patients.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  // New General Physicians
  {
    _id: "doc11",
    name: "Dr. Olivia Scott",
    image: doc11,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "6 Years",
    about:
      "Dr. Olivia Scott is dedicated to family medicine, addressing both acute and chronic medical conditions with a compassionate approach.",
    fees: 55,
    address: {
      line1: "21st Cross, Richmond",
      line2: "Main Street, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Michael Carter",
    image: doc12,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Michael Carter focuses on promoting health through preventive care and early diagnosis of medical conditions.",
    fees: 45,
    address: {
      line1: "31st Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Isabella Lewis",
    image: doc13,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "5 Years",
    about:
      "Dr. Isabella Lewis excels in treating a wide range of health conditions and emphasizes lifestyle changes for better health.",
    fees: 60,
    address: {
      line1: "41st Cross, Richmond",
      line2: "Green Avenue, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ethan Roberts",
    image: doc14,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Ethan Roberts offers comprehensive medical care, focusing on early interventions and health education for his patients.",
    fees: 50,
    address: {
      line1: "51st Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Grace Mitchell",
    image: doc15,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "7 Years",
    about:
      "Dr. Grace Mitchell provides expert medical care, blending traditional and modern approaches to ensure the best outcomes.",
    fees: 65,
    address: {
      line1: "61st Cross, Richmond",
      line2: "Elm Street, London",
    },
  },
];
