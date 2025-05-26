import React from "react";
import img1 from '../assets/fifthimg.png'
import img2 from '../assets/fifthlogo.png'
import img3 from '../assets/firstimg.png'
import img4 from '../assets/fourthimg.png'
import img5 from '../assets/fourtlogo.png'
// import img6 from '../assets/logo.png'
import img7 from '../assets/logo1.png'
// import img8 from'../assets/mixlr logo.png'
import img9 from '../assets/mixlrfooterlogo.png'
import img10 from'../assets/secondimgl.png'
import img11 from '../assets/secondlogo.png'
import img12 from '../assets/sixthlogo.png'
import img13 from '../assets/thirdimg.png'
import img14 from '../assets/thirdlogo.png'




const Div = () => {
    return (
        <div className="react-div">
             <div className="div2">
            <div className="div2a">
                <h1 className="h1b"> Our broadcast apps with your audio setup</h1>
                <p className="p2">Plug and play your audio into the mobile or desktop broadcast app. Keep it simple
                    with one audio source for mobile. Or use the desktop app for a mix of audio input
                    and a playlist of sounds. Your audio, done your way.</p>
            </div>
            <div className="div2b">
                <img className="imgbig" src={img3} alt="" srcset="" />
                {/* <img className="imgbig" src="./media testing/firstimg.png" alt=""> */}
            </div>
        </div>
        <div className="div3">
            <div className="div3a">
                {/* <img className="imgbig" src="./media testing/secondimgl.png" alt=""> */}
                <img className="imgbig" src={img10} alt="" srcset="" />
            </div>
            <div className="div3b">
                <h1 className="h1b">No limits to audience size</h1>
                <p className="p2">Reach an audience as big as you need. Connect, chat and engage with listeners all over the
                    world with the confidence that everyone will be able to connect to your live stream.
                    Mixlr has dedicated servers set aside,
                    allowing you to scale your broadcasts as big as you need without extra costs.</p>
            </div>
        </div>
        <div className="div4">
            <div className="div4a">
                <h1 className="h1b"> Your own channel, a custom website for audio</h1>
                <p className="p2">This is where all your audio is hosted. People can listen live while chatting or play back
                    recordings. The custom players are ad-free, feature audio visuals and an immersive full-screen
                    experience.
                    Brand your channel with a logo, custom background and personalized URL. It's your site for your
                    audio.</p>
            </div>
            <div className="div4b">
                {/* <img className="imgbig" src="./media testing/thirdimg.png" alt=""> */}
                <img className="imgbig" src={img13} alt="" srcset="" />
            </div>
        </div>
        <div className="div5">
            <div className="div5a">
                {/* <img className="imgbig" src="./media testing/fourthimg.png" alt=""> */}
                <img className="imgbig" src={img4} alt="" srcset="" />
            </div>
            <div className="div5b">
                <h1 className="h1b">Showcase your recordings collection</h1>
                <p className="p2">Record your broadcasts and publish them to your channel when you're ready.
                    Listeners can visit your entire archive of past broadcasts and share direct links to their
                    favorites.</p>
            </div>
        </div>
        <div className="div6">
            <div className="div6a">
                <h1 className="h1b"> Custom embeddable player</h1>
                <p className="p2">Make it easier for people to come across your audio.
                    Embed an ad-free player to your other existing sites to promote your audio content. It's as simple
                    as copying and pasting an HTML widget code.</p>
            </div>
            <div className="div6b">
                {/* <img className="imgbig" src="./media testing/fifthimg.png" alt=""> */}
                <img className="imgbig" src={img1} alt="" srcset="" />
            </div>
        </div>
        <div className="mored">
            <h1 className="more">And there's more...</h1>
        </div>
        <div className="divsecondlast">
            <div className="card">
                {/* <img src="./media testing/logo1.png" alt="" height="150px"> */}
                <img src={img7} alt="" height="150px" />
                <h2>One link, two functions</h2>
                <p className="p2">Your scheduled event automatically turns into a live stream page with chat as soon as you
                    go live.
                    Use only one link to promote your event in advance and during your broadcast.</p>
            </div>

            <div className="card">
                {/* <img src="./media testing/secondlogo.png" alt="" height="150px"> */}
                <img src={img11} alt="" height="150px" />
                <h2>Top level listener stats</h2>
                <p className="p2">Keep informed on how well your broadcasts are performing with
                    end-of-broadcast and weekly stats emails. Get numbers on your unique listeners, chat messages and
                    hearts.</p>
            </div>
        </div>
        <div className="divsecondlast">
            <div className="card">
                {/* <img src="./media testing/thirdlogo.png" alt="" height="150px"> */}
                <img src={img14} alt="" height="150px" />
                <h2>Private access to your channel</h2>
                <p className="p2">Decide who can access your channel with access settings enabled.
                    Remain private indefinitely or create one-off exclusive audio content for select listeners only.</p>
            </div>

            <div className="card">
                {/* <img src="./media testing/fourtlogo.png" alt="" height="150px"> */}
                <img src={img5} alt="" srcset="" />
                <h2>Detailed listener metrics</h2>
                <p className="p2">See how many unique listeners connected, how long for, and which countries or cities they
                    tuned in from.
                    View your listener stats over any selectable time period, and export the most relevant data as an
                    easy to use spreadsheet file.</p>
            </div>
        </div>
        <div className="divsecondlast">
            <div className="card">
                {/* <img src="./media testing/fifthlogo.png" alt="" height="150px"> */}
                <img src={img2} alt="" srcset="" />
                <h2>Optimal audio quality</h2>
                <p className="p2">Control audio quality as needed to suit bandwidth restrictions or to match the quality
                    required for your type of content.
                    With the desktop app, you can switch between low, standard, and high quality audio even while
                    broadcasting.</p>
            </div>

            <div className="card">
                {/* <img src="./media testing/sixthlogo.png" alt="" height="150px"> */}
                <img src={img12} alt="" srcset="" />
                <h2>Go white label</h2>
                <p className="p2">With a unique livestream URL, you're free to build your own website,
                    app or player around your live audio. We encode your livestream URL in mp3 format at a quality of
                    128kbps.</p>
            </div>
        </div>
        <div className="div1b">
            <h1 className="h1a">Become a Mixlr
                audio creator today</h1>
            <button className="btn2">View plans</button>
        </div>
        <div className="divlast">
            <div>
                <img src={img9} alt="" srcset="" />
                {/* <img src="./media testing/mixlrfooterlogo.png" alt=""> */}
            </div>
        </div>
        <div className="divlast">
            <div className="icons">
                <i className="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        </div>
    );
}

export default Div