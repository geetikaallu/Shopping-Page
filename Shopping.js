        var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        var dressNames = document.querySelectorAll(".dress-name");

        for (var i = 0; i < dressNames.length; i++) {
            var textNode = dressNames[i].firstChild;
                var dressName = textNode.textContent.trim();
                if (dressName.length > 14) {
                    textNode.textContent = dressName.slice(0, 10) + '...';
                }
        }
