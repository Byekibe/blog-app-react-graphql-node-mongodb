import { FaGreaterThan } from 'react-icons/fa'

const Footer = () => {
    const style = {
        
    }

    return (
        <div className="footer">
            <p className='text-center'>&copy; 2023 Peter Kibet Byegon</p>
            <div style={{ height: "2px", backgroundColor: "rgba(1, 1, 1, 0.5)"}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 g-2">
                        <p><FaGreaterThan /> About</p>
                        <p><FaGreaterThan /> Contact</p>
                        <p><FaGreaterThan /> Terms and conditions</p>
                        <p><FaGreaterThan /> Cookie center</p>
  
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 g-2">
                            <p><FaGreaterThan /> Accessibility</p>
                            <p><FaGreaterThan /> Terms and conditions</p>
                            <p><FaGreaterThan /> Cookie center</p>
                            <p><FaGreaterThan /> Feedback</p>
                    </div>      
                </div>
            </div>
        </div>
    )
};

export default Footer;