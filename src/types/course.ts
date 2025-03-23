
export interface Course {
  id: string;
  title: string;
  description: string;
  category: "NEET" | "JEE" | "IIT-M BS";
  subcategory?: "Data Science" | "Electronic Systems";
  image: string;
  duration: string;
  students: number;
  lessons: number;
  price: number;
  featured?: boolean;
  free: boolean;
}
