// Configuration for Stitch and Pitch Contest
// Easily modify guides, departments, passwords, and other settings here

export interface Guide {
  id: number;
  name: string;
  department: string;
  supervisor: string;
}

export interface Winner {
  id?: string;
  guide_id: number;
  name: string;
  department: string;
  supervisor: string;
  timestamp: string;
  chat_ids?: string[];
}

export interface Loser {
  id?: string;
  guide_id: number;
  name: string;
  department: string;
  supervisor: string;
  timestamp: string;
  chat_ids?: string[];
}

// ==========================================
// CONFIGURATION - EDIT THESE VALUES
// ==========================================

// Password for marking guides as Pass/Fail
export const ADMIN_PASSWORD = "InternationalMessaging@20";

// Password for purging winners (can be same or different)
export const PURGE_PASSWORD = "InternationalMessaging@20";

// List of all guides participating in the contest
// Add as many departments and guides as needed
export const GUIDES: Guide[] = [
  // Abdul Rahman - General
  {
    "id": 1,
    "name": "Danny Polepaka",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 2,
    "name": "Uppunuthula Harikumar",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 3,
    "name": "Shivani Akkapelli",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 4,
    "name": "Prashanth Arukala",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 5,
    "name": "Swathi, Botha",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 6,
    "name": "Gudipati Sreelatha",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 7,
    "name": "Shravya Nerella",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 8,
    "name": "Veeramreddy venkata sai kumar reddy",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 9,
    "name": "Likhitha Nalke",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 10,
    "name": "Mounika, Mittapelli",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 11,
    "name": "Bharath Nalla",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 12,
    "name": "Kondamedi Nithin",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 13,
    "name": "Gopina  Nikhil",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 14,
    "name": "Kotagiri  Sai Raj",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 15,
    "name": "Raghunayakula Sushmitha",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 16,
    "name": "Kusuma Manasa",
    "department": "General",
    "supervisor": "Abdul Rahman"
  },
  {
    "id": 17,
    "name": "Vemula Bhanuja",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 18,
    "name": "Bhargavi Macherla",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 19,
    "name": "Satla Vinay",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 20,
    "name": "Vennela Karjugutha",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 21,
    "name": "Kolariya Sharma",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 22,
    "name": "SAGANTI NIKHITHA",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 23,
    "name": "Varsha sree Narra",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 24,
    "name": "Reena Aerrabelly",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 25,
    "name": "Mohith Chaturvedula ",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 26,
    "name": "Loukya Deshaboina",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 27,
    "name": "Soumya Muppidi",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 28,
    "name": "Manasa Patra",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 29,
    "name": "Mitra, Somnath",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 30,
    "name": "Pawan Kumar, Perapaka Jyothier Venkata",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 31,
    "name": "Chandrashekhar Nanneboina",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 32,
    "name": "Jella Tharun",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 33,
    "name": "Veenanjali Kodam",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 34,
    "name": "Jyothika Mudupathula",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 35,
    "name": "Pasha Mohd Moulana",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 36,
    "name": "Ameena Tabassum",
    "department": "General",
    "supervisor": "Chandrasekhar Palem"
  },
  {
    "id": 37,
    "name": "Sirikonda  Raghu",
    "department": "General",
    "supervisor": "Prashanth G C"
  },
  {
    "id": 38,
    "name": "Panugulla Kumar Goud",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 39,
    "name": "Musari Akanksha",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 40,
    "name": "K AVINASH",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 41,
    "name": "Aravindhan Elumalai",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 42,
    "name": "ARIGELA DOSHNA KOUSALYA",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 43,
    "name": "Bhargavi Killada",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 44,
    "name": "Vanka sugandham",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 45,
    "name": "Nithish Kumar Ellendhula",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 46,
    "name": "Varganti Ramya",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 47,
    "name": "kumar Nayak",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 48,
    "name": "Sudama Prasad Yadav",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 49,
    "name": "Karthik Jakka",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 50,
    "name": "M Sowmya",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 51,
    "name": "Manasa, Pasunuti",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 52,
    "name": "Vamshi Dulam",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 53,
    "name": "Lokesh yadav seemala",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 54,
    "name": "Arvind Bandari",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 55,
    "name": "Shiva G",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 56,
    "name": "Gayathri Chennoju",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 57,
    "name": "Relli Rama Naga Sai Pavan Kumar",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 58,
    "name": "Saneem Sultan",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 59,
    "name": "Vyjayanthi Kothapally",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},
{
    "id": 60,
    "name": "Mohammed Naseer",
    "department": "Productivity",
    "supervisor": "Shaik Shoaib"
},

{
    "id": 61,
    "name": "Mohammad Irfan",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 62,
    "name": "Mounika Gadeela",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 63,
    "name": "Abid Ahmed",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 64,
    "name": "Samreen Begum",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 65,
    "name": "Vangeti Divakar Reddy",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 66,
    "name": "Asma Tabassum",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 67,
    "name": "Veldi Vijay Kumar",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 68,
    "name": "Mir Ahmed Ali",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 69,
    "name": "Ayesha Siddiqua",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 70,
    "name": "N sridar",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 71,
    "name": "Uppula Manasa",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 72,
    "name": "Nikhil Ramagiri",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 73,
    "name": "Swetha Santhpale",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 74,
    "name": "Singasani Arun",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 75,
    "name": "Kondapaka Deepika",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 76,
    "name": "Manisha Thakur",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 77,
    "name": "Murali krishna Bantu",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 78,
    "name": "Nallamala Srujan",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 79,
    "name": "Shalini Lingala",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 80,
    "name": "Alli Uday Kiran",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 81,
    "name": "Rajkumar Dhude",
    "department": "Hosting",
    "supervisor": "Abdul Rahman"
},
{
    "id": 82,
    "name": "Deepthi Pathuri",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 83,
    "name": "Konduri Gayathri",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 84,
    "name": "Dhanraj J S",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 85,
    "name": "Syed Adeeb",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 86,
    "name": "Aleem Uddin Qureshi",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 87,
    "name": "Maru Sharath Reddy",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 88,
    "name": "Sahaja Katrimala",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 89,
    "name": "Sayed Basha",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 90,
    "name": "Sanjay Kumar Sahu",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 91,
    "name": "Mir Riyasath Ali Khan",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 92,
    "name": "Syed Ala Uddin",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 93,
    "name": "P Pavan Kalyan",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 94,
    "name": "Ahmed Habeeb",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 95,
    "name": "Rathod Suraj Naik",
    "department": "Hosting",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 96,
    "name": "Kasireddy Rohith Reddy",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 97,
    "name": "Shiva Kasula",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},
{
    "id": 98,
    "name": "Dipranjan Handique",
    "department": "Hosting",
    "supervisor": "Srikanth Janga"
},

  {
    "id": 99,
    "name": "Christy Golkonda",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 100,
    "name": "Sri, Koppula Bhanu",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 101,
    "name": "KARTHIK AKARAPU",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 102,
    "name": "Sai Shashank K",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 103,
    "name": "Srikanth B",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 104,
    "name": "Dhruvitha",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 105,
    "name": "Yaswik Lebaka",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 106,
    "name": "Sharvani, Kodari",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 107,
    "name": "Mohammed Faiz Uddin",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 108,
    "name": "Tarun Namala",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 109,
    "name": "Venkatesh R",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 110,
    "name": "Mohammad shahriyar Hussain",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 111,
    "name": "Pavankalyan Bajanthri",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 112,
    "name": "Keshav, Manda",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 113,
    "name": "Navya Vanga",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
},
{
    "id": 114,
    "name": "Prasanna Machha",
    "department": "Billing",
    "supervisor": "Kalyan Chetty"
}
];

// Get unique departments from guides list
export const DEPARTMENTS = [...new Set(GUIDES.map(guide => guide.department))].sort();

// Get guides by department
export const getGuidesByDepartment = (department: string): Guide[] => {
  return GUIDES.filter(guide => guide.department === department);
};

// Contest settings
export const CONTEST_CONFIG = {
  title: "Stitch and Pitch",
  subtitle: "Annual Guide Selection Contest",
  totalGuides: GUIDES.length,
  totalDepartments: DEPARTMENTS.length
};