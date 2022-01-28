let sel1=document.querySelector('[data-qa="resume-serp__results-search"]')
let sel2=document.querySelector('[class="resume-header-title"]')
let name
let job
let salary
let experience
let block
let age
let online
let number

if(sel1) {

    chrome.storage.sync.get(["selector1", "selector2", "selector3", "selector4", "selector5", "list"], function (data) {
        for (let i = 0; i < 20; i++) {
            block = (eval(data.list))[i]
            name = eval(data.selector1)
            if (name == undefined) {         //проверка на пустые значения в поле работа
                name = 'Unknown'
            } else {
                name = name.innerText
            }
            job = eval(data.selector2)
            if (job == undefined) {         //проверка на пустые значения в поле работа
                job = 'Unknown'
            } else {
                job = job.innerText
            }
            salary = (eval(data.selector3)).innerText
            if (salary == "") {         //проверка на пустые значения в поле зарплата
                salary = 'Unknown'
            }
            experience = eval(data.selector4)
            if (experience == undefined) {      //проверка на пустые значения в поле опыт работы
                experience = 'Unknown'
            } else {
                experience = String((experience).innerText)
            }
            age = eval(data.selector5)
            if (age == undefined) {         //проверка на пустые значения в поле возраст
                age = 'Unknown'
            } else {
                age = String((age).innerText)
            }
            $.ajax({

                url: "http://php/",
                type: "post",
                data: { name : name, job: job, salary: salary, experience: experience, age: age} ,
                success: function (response) {
                    console.log("Ура");

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
            console.log(name)

        }
    })
}
else if(sel2) {
    console.log('hi')
    chrome.storage.sync.get(["selector6","selector7","selector8","selector9","selector10","selector11","selector12"], function (data) {
            name = eval(data.selector6)
            if (name == undefined) {         //проверка на пустые значения в поле работа
                name = 'Unknown'
            } else {
                name = name.innerText
        }
        console.log(name)
        job = eval(data.selector7)
                if (job == undefined) {         //проверка на пустые значения в поле работа
                    job = 'Unknown'
                } else {
                    job = job.innerText
                }
                salary = (eval(data.selector8))
                if (salary == ""||salary==undefined||salary===null) {         //проверка на пустые значения в поле зарплата
                    salary = 'Unknown'
                }
else {
                    salary = salary.innerText
                }
                experience = eval(data.selector9)
                if (experience == undefined) {      //проверка на пустые значения в поле опыт работы
                    experience = 'Unknown'
                } else {
                    experience = String((experience).innerText)
                }
                age = eval(data.selector10)
                if (age == undefined) {         //проверка на пустые значения в поле возраст
                    age = 'Unknown'
                } else {
                    age = String((age).innerText)
                }
            online = eval(data.selector11)
            if (online == undefined) {         //проверка на пустые значения в поле возраст
                online = 'Unknown'
            } else {
                online = String((online).innerText)
            }
            number = eval(data.selector12)
            if (number == undefined) {         //проверка на пустые значения в поле возраст
                number = 'Unknown'
            } else {
                number = String((number).innerText)
            }






    })
}

































   //  else if(sel2) {
   //         name =document.querySelector('[data-qa="resume-personal-name"]')
   //         if (name == undefined) {         //проверка на пустые значения в поле работа
   //             name= 'Unknown'
   //         } else {
   //             name = (document.querySelector('[data-qa="resume-personal-name"]')).innerText
   //         }
   //
   //         new_window = window.open('http://php2?name=' + name + '&job=' + job + '&salary=' + salary + '&experience=' + experience + '&age=' + age+'&online='+online+'&number='+number)
   //     new_window.close()
   // }