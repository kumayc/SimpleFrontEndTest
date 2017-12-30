window.onload = function(){
  console.log("jdkfhsdkjfhkfjsdh");
  var myTab = document.getElementById("tab"); //the whole div
  var myButt = myTab.getElementsByTagName("div")[0].getElementsByTagName("button");
  // var myLi = myUl.getElementsByTagName("li");
  // var myDiv = myTab.getElementsByTagName("div")[0];
  var myCan = myTab.getElementsByTagName("div")[1].getElementsByTagName("canvas");
  line_chart();
  
  for(var i = 0; i < myButt.length; i++){
    myButt[i].index = i;
    myButt[i].onclick = function(){
      for(var j = 0; j < myButt.length; j++){
        myButt[j].classList.remove("active");
        myCan[j].className="hide";
      }
      this.classList.add("active");
      myCan[this.index].className = "show";
      
      switch (this.index) {
        case 0:
          console.log("click the first burron");
          line_chart();
          break;
        case 1:
          polar_chart();
          break;
        case 2:
          mixed_chart();
          break;
        default:
          console.log("There is an error");
      }
      
    }
  }

}


function line_chart(){

  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });    
  
}


function polar_chart(){
  
  new Chart(document.getElementById("polar-chart"), {
      type: 'polarArea',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });  
  
}

function mixed_chart(){
  
  new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
      },
      legend: { display: false }
    }
});
  
  
}