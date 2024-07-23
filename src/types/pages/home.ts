interface About {
  short_detail: string;
  position: string;
  detail: string;
}

interface Education {
  degree: string;
  institute: string;
  start: string;
  end: string;
  description: string[];
}

interface Experience {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string[];
}

interface Service {
  name: string;
  description: string;
}

interface Testimonial {
  name: string;
  feedback: string;
}

interface Profile {
  about: About;
  address: string;
  dob: {
    seconds: number;
    nanoseconds: number;
  };
  education: Education[];
  email: string;
  experience: Experience[];
  name: string;
  nationality: string;
  phone: string;
  services: Service[];
  tagline: string;
  testimonials: Testimonial[];
}

export default Profile;
