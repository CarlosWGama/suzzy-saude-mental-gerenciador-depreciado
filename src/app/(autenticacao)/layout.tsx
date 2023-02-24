import Image from 'next/image';
import Script from 'next/script';

export default function LoginTemplate({children}:any) {

    return (
        <div>
            {/* <!-- Pre-loader start --> */}
            <div className="theme-loader">
                <div className="loader-track">
                    <div className="preloader-wrapper">
                        <div className="spinner-layer spinner-blue">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="spinner-layer spinner-red">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
        
                        <div className="spinner-layer spinner-yellow">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
        
                        <div className="spinner-layer spinner-green">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Pre-loader end -->*/}
        
            <section className="login-block">
                {/* <!-- Container-fluid starts --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <!-- Authentication card start --> */}
                            <div className="md-float-material form-material">
                                <div className="text-center">
                                    <Image src="/assets/images/logo.png" width={300} height={100} alt="Logo" />
                                </div>
                                <div className="auth-box card">
                                    
                                    {children}

                                </div>
                            </div>
                            {/* <!-- end of form --> */}
                        </div>
                        {/* <!-- end of col-sm-12 --> */}
                    </div>
                    {/* <!-- end of row --> */}
                </div>
                {/* <!-- end of container-fluid --> */}
            </section>
            
                {/* <!-- Required Jquery --> */}
                <Script type="text/javascript" src="/assets/js/jquery/jquery.min.js"/>
                <Script type="text/javascript" src="/assets/js/jquery-ui/jquery-ui.min.js"/>
                <Script type="text/javascript" src="/assets/js/popper.js/popper.min.js"/>
                <Script type="text/javascript" src="/assets/js/bootstrap/js/bootstrap.min.js"/>
                {/* <!-- waves js --> */}
                {/* <script src="/assets/pages/waves/js/waves.min.js"/> */}
                {/* <!-- jquery slimscroll js --> */}
                <Script type="text/javascript" src="/assets/js/jquery-slimscroll/jquery.slimscroll.js"/>
                <Script type="text/javascript" src="/assets/js/common-pages.js"/>
        </div>
    )
}