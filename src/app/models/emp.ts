export interface Emp {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
  }
  
  export  interface ApiResponse {
    status: "success";
    data: Emp[];
    message: string;
  }