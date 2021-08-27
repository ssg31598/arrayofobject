let x = [];

        function getUserinfo() {
            x.push({ name: document.getElementById("name").value, age: document.getElementById("age").value });
            console.log(x);
        }

        function filterarray() {
            let y = [];
            let z=[];
            y = x.filter((item) => {
                return (
                    item.age >= document.getElementById('minage').value && item.age <= document.getElementById('maxage').value
                )
            });
            for(let i=0;i<y.length;i++){
                z.push(y[i].name);
            }
            console.log(z)
        }

        document.getElementById('submit').addEventListener('click',filterarray);
        document.getElementById('addvalue').addEventListener('click',getUserinfo);