  import logo1 from "../images/logo1.jpg"


  import ("./index.css");

  console.log("logo",logo1)
   let head = document.getElementById("head");

   let img = document.createElement("img");
   img.src= logo1;

   let tit = document.createElement("h1");
   tit.innerText="Sticky Notes";

   head.append(img)

      document.querySelector("form").addEventListener("submit", todoList);
      var todoArr = JSON.parse(localStorage.getItem("todoTodo"))||[]
      //createTable(todoArr);
      window.addEventListener("load", function () {
        createTable(todoArr);
      });
      function todoList(event) {
        event.preventDefault();
        var item = document.querySelector("#item").value;
        var qty = document.querySelector("#qty").value;
        //----------------------------------------------------
        var taskList = { itemName: item, itemQty: qty };
        todoArr.push(taskList);
        localStorage.setItem("todoTodo", JSON.stringify(todoArr));
        //----------------------------------------------------
        createTable(todoArr);
      }
      function createTable(todoArr) {
        console.log(todoArr);
        //------------------------------------------------------
        document.querySelector("tbody").innerHTML = "";
        todoArr.map(function (elem,index) {
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          td1.textContent = elem.itemName;
          var td2 = document.createElement("td");
          td2.textContent = elem.itemQty;
          var td3 = document.createElement("td");
          td3.textContent = "Delete";
          td3.addEventListener("click",function(){
            todoArr.splice(index,1)
        console.log(todoArr)
        localStorage.setItem("todoTodo",JSON.stringify(todoArr))
        createTable(todoArr)
          })
          tr.append(td1, td2, td3);
          document.querySelector("tbody").append(tr);
          //------------------------------------------------
        });
      }