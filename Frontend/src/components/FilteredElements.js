import React, { Component } from 'react';

import './FilteredElements.css';

export default class FilteredElements extends Component {

    componentDidMount() {
        this.loadItems('all');
    };

    loadItems = (c) => {
     this.filterSelection(c)
       
     var btnContainer = document.getElementById("myBtnContainer");
     var btns = btnContainer.getElementsByClassName("btn");
     for ( var i = 0; i < btns.length; i++) {
         btns[i].addEventListener("click", function() {
             var current = document.getElementsByClassName("active");
             current[0].className = current[0].className.replace(" active", "");
             this.className += " active";
             });
         };
    }; 

    filterSelection = (c) => {
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        this.w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
      }
    };
    
    w3AddClass = (element, name) => {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    };
    
    w3RemoveClass = (element, name) => {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1); 
        }
      }
      element.className = arr1.join(" ");
    };
    
  render() {  

    return  <section>
    <div id="myBtnContainer">
    <button type='button' className="btn active" onClick={() => this.loadItems('all')}> Show all</button>
    <button className="btn" onClick={() => this.loadItems('cars')}> Cars</button>
    <button className="btn" onClick={() => this.loadItems('animals')}> Animals</button>
    <button className="btn" onClick={() => this.loadItems('fruits')}> Fruits</button>
    <button className="btn" onClick={() => this.loadItems('colors')}> Colors</button>
    </div>
    
    <div className="container">
    <div className="filterDiv cars">BMW</div>
    <div className="filterDiv colors fruits">Orange</div>
    <div className="filterDiv cars">Volvo</div>
    <div className="filterDiv colors">Red</div>
    <div className="filterDiv cars animals">Mustang</div>
    <div className="filterDiv colors">Blue</div>
    <div className="filterDiv animals">Cat</div>
    <div className="filterDiv animals">Dog</div>
    <div className="filterDiv fruits">Melon</div>
    <div className="filterDiv fruits animals">Kiwi</div>
    <div className="filterDiv fruits">Banana</div>
    <div className="filterDiv fruits">Lemon</div>
    <div className="filterDiv animals">Cow</div>
    </div>
    
    </section>;
    

    
  }
}
