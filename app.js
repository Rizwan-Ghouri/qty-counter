var num = 0;     
        var count = document.getElementById('show');
        
       function incress() {
        num++
        count.innerText = num;
        }

       function remove() {
         num = 0
         count.innerText = num;
        }

        function decress() {
        num--
        count.innerText = num;
        }
        