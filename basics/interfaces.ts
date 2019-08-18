/* Lib File */
interface Reportable {
  summary: () => string;
}
type SummaryPrinter = (report: Reportable) => void;
const printSummary: SummaryPrinter = ({ summary }) => {
  console.log(summary());
};

/* Src File - 1*/
{
  interface VehicleProps {
    name: string;
    year: Date;
    broken: boolean;
  }
  type Vehicle = VehicleProps & Reportable;

  const oldCivic: Vehicle = {
    name: "Civic",
    year: new Date(),
    broken: true,
    summary() {
      return `${this.name}, ${this.year} is ${
        this.broken ? "broken!" : "working good!"
      }`;
    },
  };
  const { summary } = oldCivic;
  printSummary({ summary });
}

/* Src File - 2*/
{
  interface SoftdrinkProps {
    color: string;
    carbonated: boolean;
    sugar: number;
  }
  type Softdrink = SoftdrinkProps & Reportable;

  const myPepsi: Softdrink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary() {
      return `${this.color}, with sugar level ${this.sugar} is ${
        this.carbonated ? "carbonated!" : "not carbonated!"
      }`;
    },
  };
  const { summary } = myPepsi;
  printSummary({ summary });
}
