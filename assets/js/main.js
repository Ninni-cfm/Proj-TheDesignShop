
let shopArticles = [
    // ["Product-name", "Company", "Price", "Product-picture", "Link-shop"],
    ['Kanken Art Laptop 15" Special Edition Backpack', "Fjallraven", "$119.00", "01.png", "https://amzn.to/32MmHgL"],
    ["Swing Arm Wood Desk Lamp", "Tomons", "$36.00", "d2.png", "https://amzn.to/2WX7vtD"],
    ["Hajo Backpack", "Ucon Acrobatics", "$89.00", "u6.png", "https://amzn.to/2I3WvXM"],
    ["Zed Bamboo Longboard", "Retrospec", "$60.00", "u10.png", "https://amzn.to/2YX3043"],
    ["Electric Pour-Over Kettle", "Fellow", "$149.00", "u9.png", "https://amzn.to/2KfP3ee"],
    ["Woodie Vintage Car", "Candylab Toys", "$35.00", "h17.png", "https://amzn.to/2FYB3zT"],
    ["Logo Modernism", "Taschen", "$60.00", "c3.png", "https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991"],
    ["Dieter Rams: As Little Design as Possible", "Sophie Lovell", "$150.00", "d7.png", "https://amzn.to/2YQLnCV"],
    ["The Eye", "Nathan Williams", "$28.00", "c6.png", "https://amzn.to/2I3lbQ7"],
    ["Gather Desk Organizer", "Ugmonk", "$149.00", "h13.png", "https://amzn.to/2IifSvA"],
    ["Dipped Canteen", "Corkcicle.", "$28.00", "h8.png", "https://amzn.to/2G84CiT"],
    ["Sayl Office Chair White", "Herman Miller", "$599.00", "h2.png", "https://amzn.to/2YWPz3N"],
    ["Three Cherry Wood Notebook", "Field Notes", "$13.00", "d5.png", "https://amzn.to/2KhwTsz"],
    ["From Japan", "Counter Print", "$16.00", "c5.png", "https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991"],
    ["Arigato Desk Lamp", "Grupa", "$380.00", "h6.png", "http://www.grupaproducts.com/arigato/"],
    ["Winston Regal Watch", "Komono", "$58.00", "u7.png", "https://amzn.to/2CZiPxO"],
    ["Letter H Poster", "Hey Studio", "$45.00", "d4.png", "https://heyshop.es/collections/home/products/h-hey"],
    ["Coffee Can", "Blue Bottle Company", "$11.00", "u11.png", "https://amzn.to/2UGLHEQ"],
    ["Beoplay H4", "Bang & Olufsen", "$160.00", "h9.png", "https://amzn.to/2UFjEWp"],
    ["Make It Now", "Anthony Burrill", "$22.00", "p2.png", "https://amzn.to/2OTHEQg"],
    ["Black Side Chair", "Eames Style", "$54.00", "h4.png", "https://amzn.to/2UFHfGt"],
    ["Min: The New Simplicity in Graphic Design", "Thames & Hudson", "$28.00", "c22.png", "https://amzn.to/2Ij1IKA"],
    ["Grid systems in graphic design", "Josef Müller-Brockmann", "$42.00", "c1.png", "https://amzn.to/2UxtLww"],
    ["Card Wallet", "Herschel", "$15.00", "u12.png", "https://amzn.to/2I5vxiq"],
    ["Classic Advice Print Black", "Good Fucking Design Advice", "$30.00", "p3.png", "https://goodfuckingdesignadvice.com/products/classic-advice-print"],
    ["Magic Mouse 2", "Apple", "$92.00", "life-15.png", "https://amzn.to/2D3yZWX"],
    ["Travel Tumbler", "Kinto", "$34.00", "life-17.png", "https://amzn.to/2WTbsPL"],
    ["Magic Keyboard", "Apple", "$139.00", "life-16.png", "https://amzn.to/2GbCf4A"],
    ["Bottle Grinder", "Menu", "$75.00", "u8.png", "https://amzn.to/2WMJbdy"],
    ["Geo Thermos", "Normann Copenhagen", "$62.00", "home-8.png", "https://amzn.to/2JLtxvk"],
    ["Womb Chair & Ottoman", "Kardiel", "$799.00", "home-10.png", "https://amzn.to/2YdSBPy"],
    ["Water Filter Glass Carafe", "Soma", "$30.00", "home-9.png", "https://amzn.to/2LCEfGP"]
];


showArticles();

function showArticles() {
    let shopContent = document.getElementById("shop-content");

    for (let i = 0; i < shopArticles.length; i++) {
        let shopHtml = "";
        let j = 0;
        let productName = shopArticles[i][j++];
        let company = shopArticles[i][j++];
        let price = shopArticles[i][j++];
        let picture = shopArticles[i][j++];
        let linkShop = shopArticles[i][j++];
        shopHtml += '\n<div class="article">';
        shopHtml += '\n    <a href="' + linkShop + '" target="_blank">';
        shopHtml += '\n        <figure>';
        shopHtml += '\n            <img src="assets/img/' + picture + '"' + "alt='" + productName + "'>";
        shopHtml += '\n            <figcaption>';
        shopHtml += '\n                <p>' + productName + '</p>';
        shopHtml += '\n                <p>' + price + '</p>';
        shopHtml += '\n                <p>' + company + '</p>';
        shopHtml += '\n            </figcaption>';
        shopHtml += '\n        </figure>';
        shopHtml += '\n    </a>';
        shopHtml += '\n</div>';
        // console.log(shopHtml)
        shopContent.innerHTML += shopHtml;
    }
}


/*

let shopArticles2 = [
    // ["Product-name", "Company", "Price", "Product-picture", "Link-shop"],
    art = { productName: 'Kanken Art Laptop 15" Special Edition Backpack', company: 'Fjallraven', price: '$119,00', picture: 'assets/img/01.png', linkShop: 'https://amzn.to/32MmHgL' },
    art = { productName: 'Swing Arm Wood Desk Lamp', company: 'Tomons', price: '$36,00', picture: 'assets/img/d2.png', linkShop: 'https://amzn.to/2WX7vtD' },
    art = { productName: 'Hajo Backpack', company: 'Ucon Acrobatics', price: '$89,00', picture: 'assets/img/u6.png', linkShop: 'https://amzn.to/2I3WvXM' },
    art = { productName: 'Zed Bamboo Longboard', company: 'Retrospec', price: '$60,00', picture: 'assets/img/u10.png', linkShop: 'https://amzn.to/2YX3043' },
    art = { productName: 'Electric Pour-Over Kettle', company: 'Fellow', price: '$149,00', picture: 'assets/img/u9.png', linkShop: 'https://amzn.to/2KfP3ee' },
    art = { productName: 'Woodie Vintage Car', company: 'Candylab Toys', price: '$35,00', picture: 'assets/img/h17.png', linkShop: 'https://amzn.to/2FYB3zT' },
    art = { productName: 'Logo Modernism', company: 'Taschen', price: '$60,00', picture: 'assets/img/c3.png', linkShop: 'https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991' },
    art = { productName: 'Dieter Rams: As Little Design as Possible', company: 'Sophie Lovell', price: '$150,00', picture: 'assets/img/d7.png', linkShop: 'https://amzn.to/2YQLnCV' },
    art = { productName: 'The Eye', company: 'Nathan Williams', price: '$28,00', picture: 'assets/img/c6.png', linkShop: 'https://amzn.to/2I3lbQ7' },
    art = { productName: 'Gather Desk Organizer', company: 'Ugmonk', price: '$149,00', picture: 'assets/img/h13.png', linkShop: 'https://amzn.to/2IifSvA' },
    art = { productName: 'Dipped Canteen', company: 'Corkcicle.', price: '$28,00', picture: 'assets/img/h8.png', linkShop: 'https://amzn.to/2G84CiT' },
    art = { productName: 'Sayl Office Chair White', company: 'Herman Miller', price: '$599,00', picture: 'assets/img/h2.png', linkShop: 'https://amzn.to/2YWPz3N' },
    art = { productName: 'Three Cherry Wood Notebook', company: 'Field Notes', price: '$13,00', picture: 'assets/img/d5.png', linkShop: 'https://amzn.to/2KhwTsz' },
    art = { productName: 'From Japan', company: 'Counter Print', price: '$16,00', picture: 'assets/img/c5.png', linkShop: 'https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991' },
    art = { productName: 'Arigato Desk Lamp', company: 'Grupa', price: '$380,00', picture: 'assets/img/h6.png', linkShop: 'http://www.grupaproducts.com/arigato/' },
    art = { productName: 'Winston Regal Watch', company: 'Komono', price: '$58,00', picture: 'assets/img/u7.png', linkShop: 'https://amzn.to/2CZiPxO' },
    art = { productName: 'Letter H Poster', company: 'Hey Studio', price: '$45,00', picture: 'assets/img/d4.png', linkShop: 'https://heyshop.es/collections/home/products/h-hey' },
    art = { productName: 'Coffee Can', company: 'Blue Bottle Company', price: '$11,00', picture: 'assets/img/u11.png', linkShop: 'https://amzn.to/2UGLHEQ' },
    art = { productName: 'Beoplay H4', company: 'Bang & Olufsen', price: '$160,00', picture: 'assets/img/h9.png', linkShop: 'https://amzn.to/2UFjEWp' },
    art = { productName: 'Make It Now', company: 'Anthony Burrill', price: '$22,00', picture: 'assets/img/p2.png', linkShop: 'https://amzn.to/2OTHEQg' },
    art = { productName: 'Black Side Chair', company: 'Eames Style', price: '$54,00', picture: 'assets/img/h4.png', linkShop: 'https://amzn.to/2UFHfGt' },
    art = { productName: 'Min: The New Simplicity in Graphic Design', company: 'Thames & Hudson', price: '$28,00', picture: 'assets/img/c22.png', linkShop: 'https://amzn.to/2Ij1IKA' },
    art = { productName: 'Grid systems in graphic design', company: 'Josef Müller-Brockmann', price: '$42,00', picture: 'assets/img/c1.png', linkShop: 'https://amzn.to/2UxtLww' },
    art = { productName: 'Card Wallet', company: 'Herschel', price: '$15,00', picture: 'assets/img/u12.png', linkShop: 'https://amzn.to/2I5vxiq' },
    art = { productName: 'Classic Advice Print Black', company: 'Good Fucking Design Advice', price: '$30,00', picture: 'assets/img/p3.png', linkShop: 'https://goodfuckingdesignadvice.com/products/classic-advice-print' },
    art = { productName: 'Magic Mouse 2', company: 'Apple', price: '$92,00', picture: 'assets/img/life-15.png', linkShop: 'https://amzn.to/2D3yZWX' },
    art = { productName: 'Travel Tumbler', company: 'Kinto', price: '$34,00', picture: 'assets/img/life-17.png', linkShop: 'https://amzn.to/2WTbsPL' },
    art = { productName: 'Magic Keyboard', company: 'Apple', price: '$139,00', picture: 'assets/img/life-16.png', linkShop: 'https://amzn.to/2GbCf4A' },
    art = { productName: 'Bottle Grinder', company: 'Menu', price: '$75,00', picture: 'assets/img/u8.png', linkShop: 'https://amzn.to/2WMJbdy' },
    art = { productName: 'Geo Thermos', company: 'Normann Copenhagen', price: '$62,00', picture: 'assets/img/home-8.png', linkShop: 'https://amzn.to/2JLtxvk' },
    art = { productName: 'Womb Chair & Ottoman', company: 'Kardiel', price: '$799,00', picture: 'assets/img/home-10.png', linkShop: 'https://amzn.to/2YdSBPy' },
    art = { productName: 'Water Filter Glass Carafe', company: 'Soma', price: '$30,00', picture: 'assets/img/home-9.png', linkShop: 'https://amzn.to/2LCEfGP' }
];
*/