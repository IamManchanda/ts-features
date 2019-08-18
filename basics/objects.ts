interface Profile {
  name: string;
  age: number;
  coords: {
    lat: number;
    lng: number;
  };
  setAge(age: number): void;
}
interface ageFromProfile {
  age: number;
}
interface coordsFromProfile {
  coords: {
    lat: number;
    lng: number;
  };
}

const profile: Profile = {
  name: "Harry Manchanda",
  age: 26,
  coords: {
    lat: 28.613423400000002,
    lng: 77.0902929,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: ageFromProfile = profile;
const {
  coords: { lat, lng },
}: coordsFromProfile = profile;
