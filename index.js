// Button adds a bookmark when it is clicked on
let addedBookmarks = []; 
// bookmark.map((text) => {
//     addedBookmarks.push()
// })

class Bookmark {
    constructor(brand, url){
        this.brand = brand;
        this.url = url;
    }

    // addedBookmarks(bookmark) {
    //     this.bookmarks.push.(bookmark)
    // }

    getBookmarkData() {
        return `${this.brand},
        ${this.url}`;
    }

    render() {
        const li = document.createElement("li");
        const brand = doucment.createElement("h1");
        brand.textContent = this.brand;
        
        const industry = document.createElement("h2");
        industry.textContent = this.industry;
        
        li.append(brand, industry)
        
// add remove button and an event listener for my remove button here

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.addEventListener("click", function(){
        const bookmark = getBookmark();
        const updatedBookmark = removedBookmark (bookmark);
        setBookmark(updatedBookmark);
    });

    li.prepend(remobeBtn);
    
        return li;

        }
}

const button = document.querySelector(".btn");
button.addEventListener("click", function(){
    const inputBrand = document.querySelector("#name");
    const inputUrl = document.querySelector("#link");

    // inputBrand.value;
    // inputUrl.value;

    const bookmark = new Bookmark(inputBrand.value, inputUrl.value);

    console.log(bookmark);
})




