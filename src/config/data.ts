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