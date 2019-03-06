function openCategory(evt, categoryName)
{
    var i, tabcontent, tablinks;
    
    
    // hiden content
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    
    
    //set all class active in none
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active"
    
}

function showSiderbar()
{
    var siderbar = document.getElementById("left-siderbar");
    var siderbar_style = window.getComputedStyle(siderbar);
    var img_dropdown = document.getElementById("img-dropdown");
    var cell_fixed_indent = document.getElementById("cell-fixed-indent");
    var hidden_search_line = document.getElementById("hidden-search-line");
    
    if(siderbar_style.top == "-300px"){
//        siderbar.style.display = "block";
        img_dropdown.style.webkitTransform = "rotate(180deg)";
        img_dropdown.style.bottom = "1px";
        siderbar.style.top = "0px";
        cell_fixed_indent.style.marginLeft = "18.2rem";
        cell_fixed_indent.style.paddingLeft = " .625rem";
        if(window.matchMedia("(min-width: 768px)").matches){
           hidden_search_line.style.display = "block";
            cell_fixed_indent.style.marginLeft = "18.2rem";
            cell_fixed_indent.style.paddingLeft = " .625rem";
        }
        else{
           hidden_search_line.style.display = "none";
            cell_fixed_indent.style.marginLeft = "0px";
            cell_fixed_indent.style.paddingLeft = "0px";
        }
        
        
        
    }else {
//        siderbar.style.display = "none";
        img_dropdown.style.webkitTransform = "rotate(0deg)";
        img_dropdown.style.bottom = "5px";
        siderbar.style.top = "-300px";
        hidden_search_line.style.display = "none";
        if(window.matchMedia("(min-width: 768px)").matches){
           hidden_search_line.style.display = "block";
            cell_fixed_indent.style.marginLeft = "0px";
            cell_fixed_indent.style.paddingLeft = "0px";
        }
        else{
           hidden_search_line.style.display = "block";
            cell_fixed_indent.style.marginLeft = "0px";
            cell_fixed_indent.style.paddingLeft = "0px";
        }
    }
    
    
    
//    -webkit-transform: rotate(180deg);
//    bottom: 1px;
}

/*margin-left: 18.2rem;
    padding-left: .625rem;*/