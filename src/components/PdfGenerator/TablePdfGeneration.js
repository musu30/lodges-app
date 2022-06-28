import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import autoTable from "jspdf-autotable";

function TablePdfGeneration(props) {
  const [people, setPeople] = useState([
    {
      name: "Keanu Reeves",
      profession: "Actor",
      name: "Keanu Reeves",
      profession: "Actor",
      name: "Keanu Reeves",
      profession: "Actor",
    },
    {
      name: "Lionel Messi",
      profession: "Football Player",
      name: "Keanu Reeves",
      profession: "Actor",
      name: "Keanu Reeves",
      profession: "Actor",
    },
    {
      name: "Cristiano Ronaldo",
      profession: "Football Player",
      name: "Keanu Reeves",
      profession: "Actor",
      name: "Keanu Reeves",
      profession: "Actor",
    },
    {
      name: "Jack Nicklaus",
      profession: "Golf Player",
      name: "Keanu Reeves",
      profession: "Actor",
      name: "Keanu Reeves",
      profession: "Actor",
    },
  ]);
  //   useEffect(() => {
  //     props.open?exportPDF():"";

  //   }, []);

  const exportPDF = () => {
    console.log("reached");
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [
      ["NAME", "PROFESSION", "NAME", "PROFESSION", "NAME", "PROFESSION"],
    ];

    const data = people.map((elt) => [
      elt.name,
      elt.profession,
      elt.name,
      elt.profession,
      elt.name,
      elt.profession,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
  //   return (
  //     <div>
  //       <button onClick={exportPDF}>Generate Report</button>
  //     </div>
  //   );
}

export default TablePdfGeneration;
