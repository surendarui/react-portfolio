import footerbg from "../assets/images/footer.png";



var footerStyle = {
  width: "100%",
  backgroundImage: "url(" + footerbg + ")"
};

const Footer = () => {
    return(
        <div>
            <footer className="bg-dark-main">
                <div class="text-center">&#169;	Copyright Surendar 2024</div>

            </footer>
        </div>
    )
}

export default Footer;