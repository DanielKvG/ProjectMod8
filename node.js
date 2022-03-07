const swup = new Swup()

function init() {
    if (document.querySelector(".fullscreen") && document.fullscreenElement == null) {
        var container = document.querySelector('.fullscreen');
        var btn = document.getElementById('FullScreen');

        btn.onclick = function() {
            var
                el = document.documentElement
                , rfs =
                    el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
            ;
            rfs.call(el);
            container.classList.remove("active");
        };

        setTimeout( () => {
            container.classList.add("active");
        }, 2000);
    }

    if (document.querySelector('.content-packages')) {
        var btn_comf = document.getElementById("comf_btn");
        var btn_full = document.getElementById("full_btn");
        var txtcomf = document.querySelector("#comf_more");
        var txtfull = document.querySelector("#full_more");
        var comf = document.querySelector(".comfort");
        var full = document.querySelector(".full")
        var image = document.querySelector("#headsetpackages");

        var i=0;

        btn_comf.onclick = function() {
            if (!i) {
                txtcomf.style.display='block';
                btn_comf.innerHTML='Read less';
                full.style.display='none';
                image.src ='./assets/comfortpackage.png';
                i=1;
            }
            else {
                txtcomf.style.display='none';
                btn_comf.innerHTML='Read more';
                full.style.display='block';
                image.src ='./assets/Headset-packages.png';
                i=0;
            }
        };

        btn_full.onclick = function() {
            if (!i) {
                txtfull.style.display='block';
                btn_full.innerHTML='Read less';
                comf.style.display='none';
                image.src ='./assets/full-experience.png';
                i=1;
            }

            else {
                txtfull.style.display='none';
                btn_full.innerHTML='Read more';
                comf.style.display='block';
                i=0;
                image.src ='./assets/Headset-packages.png';
            }
        };
    }

    if (document.querySelector('.content-services')) {
        var txt_opt = document.querySelector('.txt_opt');
        var title = document.querySelector('#title');
        var txt = document.querySelector('#txt_change');
        var img = document.querySelector('#services');
        var img_tread = document.querySelector('#treadmill');
        var btn_cs = document.getElementById('btn_cs');
        var btn_t = document.getElementById('btn_t');
        var btn_s = document.getElementById('btn_s');
        var container = document.querySelector('.textabout');

        var i=0;

        btn_cs.onclick = function() {
            if (!i) {
                txt_opt.style.display='none';
                title.innerHTML='VR charging station and Helpdesk';
                txt.innerHTML='We know that battery life of the VR headsets affects the training momentum so we design a solution that keeps them properly stored and fully charged. The charging station charges wirelessly and can store varying amount of hardware depending on the size of your training.</p> <p> Our digital helpdesk provides you with resources that assist you in different stages of your training by providing tips and guidelines on functionality of our software, proper usage of certain tools as well as FAQ. Not enough? You can also reuest a live chat with one of our experts for specific questions.'
                img.src ='./assets/VRcharging.png';
                btn_cs.innerHTML='Read less'
                btn_t.style.display='none';
                btn_s.style.display='none';
                i=1;
            }
            else {
                txt_opt.style.display='block';
                title.innerHTML='Services';
                txt.innerHTML='Our services include provision of hardware and software as well as analytic system for testing progress and impact of the training. Hardware includes VR headsets and controllers, VR treadmill and simulation tools.'
                img.src ='./assets/services.png';
                btn_cs.innerHTML='Read more';
                btn_t.style.display='block';
                btn_s.style.display='block';
                i=0;
            }
        };

        btn_t.onclick = function() {
            if (!i) {
                txt_opt.style.display='none';
                title.innerHTML='VR Truck';
                txt.innerHTML='No space, no problem! With the VR truck, we offer more flexibility and mobility as the training is no longer dependent on a specific location. Our truck comes fully equipped with charging stations for the VR headsets as well as VR treadmill and other specific training tools. Options for natural ventilations are also provided. <br>You can walk around in the VR truck by going to <a id="unitylink" href="https://danielkvg.itch.io/vrain" target="_blank">this page</a>.'
                img.src ='./assets/VRtruck.png';
                img_tread.style.display='block';
                btn_t.innerHTML='Read less'
                btn_t.style.marginBottom = '0px';
                btn_cs.style.display='none';
                btn_s.style.display='none';
                container.style.transform = 'translateY(-5%)'
                i=1;
            }
            else {
                txt_opt.style.display='block';
                title.innerHTML='Services';
                txt.innerHTML='Our services include provision of hardware and software as well as analytic system for testing progress and impact of the training. Hardware includes VR headsets and controllers, VR treadmill and simulation tools.'
                img.src ='./assets/services.png';
                img_tread.style.display='none';
                btn_t.innerHTML='Read more';
                btn_t.style.marginBottom = '40px';
                btn_cs.style.display='block';
                btn_s.style.display='block';
                container.style.transform = 'translateY(0)'
                i=0;
            }
        };

        btn_s.onclick = function() {
            if (!i) {
                txt_opt.style.display='none';
                title.innerHTML='Software';
                txt.innerHTML='We offer a wide range of health and safety training softwares that are fully functional with the complete experience package. From trainings that equip participants with the basic knowledge and skills on identifying safety and health risks; determining appropriate control and handle measures to training on use of safety equipments.</p> <p>Furthermore we can collaborate with you to design programs tailored pecifically for the kind of training you require.</p> <p>Our developers mainly use Unity and unreal engine to create result-oriented 3D contents.</p> <p>For more information, <a class="contact-link" href="/contact.html">contact us</a>.'
                img.src ='./assets/software.png';
                btn_s.innerHTML='Read less'
                btn_cs.style.display='none';
                btn_t.style.display='none';
                i=1;
            }
            else {
                txt_opt.style.display='block';
                title.innerHTML='Services';
                txt.innerHTML='Our services include provision of hardware and software as well as analytic system for testing progress and impact of the training. Hardware includes VR headsets and controllers, VR treadmill and simulation tools.'
                img.src ='./assets/services.png';
                btn_s.innerHTML='Read more';
                btn_t.style.display='block';
                btn_cs.style.display='block';
                i=0;
            }
        };
    }

    if (document.querySelector(".textfield")) {
        var question = document.querySelector("#txt-question");
        var email = document.querySelector("#email");
        var btn = document.getElementById("send");

        btn.onclick = function() {
            question.value='';
            email.value='';
            window.confirm("Your question has been submitted, We'll get in touch as soon as possible.");
        };
    }

    if (document.querySelector(".client")) {
        var username = document.querySelector("#username");
        var password = document.querySelector("#password");
        var btn = document.getElementById("login-btn");

        btn.onclick = function() {
            username.value='';
            password.value='';
            window.confirm("You've been logged in!");
        };
    }

    if (document.querySelector('.dark-back, .red-back')) {
        document.querySelector('.tabs').style.color = 'white';
        document.querySelector('#abouttab').style.color = 'white';
        document.querySelector('#contacttab').style.color = 'white';
        document.querySelector('#indextab').style.color = 'white';
        document.querySelector('#packagestab').style.color = 'white';
        document.querySelector('#servicestab').style.color = 'white';
        document.querySelector('#logintab').style.color = 'white';
        document.querySelector('.tabs').style.border = '3px solid white';
    } else {
        document.querySelector('.tabs').style.color = 'black';
        document.querySelector('#abouttab').style.color = 'black';
        document.querySelector('#contacttab').style.color = 'black';
        document.querySelector('#indextab').style.color = 'black';
        document.querySelector('#packagestab').style.color = 'black';
        document.querySelector('#servicestab').style.color = 'black';
        document.querySelector('#logintab').style.color = 'black';
        document.querySelector('.tabs').style.border = '3px solid black';
    };
}

// run once 
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);