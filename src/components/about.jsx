import BrowseRecipes from "./browseRecipes";
import mission from "../assets/images/image-about-our-mission-large.webp";
import bullet from "../assets/images/icon-bullet-point.svg";
import about from "../assets/images/image-about-beyond-the-plate-small.webp";

function About(){
    return(
        <>
            <section className="grid md:grid-cols-2 grid-cols-1 md:gap-15 gap-8 items-center md:px-20 py-15 md:py-20 border-b border-b-neutral-300 md:mx-60  px-8">
                <div className="md:mb-15">
                    <span className="text-neutral-900 font-bold text-lg bg-orange-500 rounded-lg p-1">Our mission</span>
                    <h1 className="text-4xl md:text-5xl text-neutral-900 font-extrabold my-8 leading-12">Help more people cook nourishing meals, more often.</h1>
                    <p className="text-neutral-600 font-medium text-lg mb-5">Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
                    <p className="text-neutral-600 font-medium text-xl">We showcase quick, whole-food dishes that anyone can master -no fancy equipment, no ultra-processed shortcuts -just honest ingredients and straightforward steps.</p>
                </div>
                <img src={mission} className=" rounded-lg"/>
            </section>

            <section className="md:py-20 pt-15 border-b border-b-neutral-300 md:mx-60 md:px-0  px-8 grid md:grid-cols-2 grid-cols-1 gap-8 ">
                <h2 className="text-4xl text-neutral-900 font-extrabold md:mx-50">Why we exist</h2>
                <div>
                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Cut through the noise.</h3>
                            <p className="text-neutral-600 font-medium">The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Empower home kitchens.</h3>
                            <p className="text-neutral-600 font-medium">When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Make healthy look good.</h3>
                            <p className="text-neutral-600 font-medium">High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="md:py-20 pt-15 border-b border-b-neutral-300 md:mx-60 md:px-0  px-8 grid md:grid-cols-2 grid-cols-1 gap-8">
                <h2 className="text-4xl text-neutral-900 font-extrabold md:mx-50 mr-30 md:text-center leading-snug">Our food Philosophy</h2>
                <div>
                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Whole ingredients first.</h3>
                            <p className="text-neutral-600 font-medium">Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Flavor without compromise.</h3>
                            <p className="text-neutral-600 font-medium">Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Respect for time.</h3>
                            <p className="text-neutral-600 font-medium">Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start mb-10">
                        <img src={bullet} />
                        <div>
                            <h3 className="text-neutral-900 font-bold text-2xl mb-2">Sustainable Choices</h3>
                            <p className="text-neutral-600 font-medium">Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:mx-80 md:px-0  px-8 py-8">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-15 gap-8 items-center md:mt-15 mb-10">
                    <div className="md:mb-15">
                        <h2 className="text-4xl text-neutral-900 font-extrabold my-8">Beyond the plate</h2>
                        <p className="text-neutral-600 font-medium text-lg mb-5">We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                        <ul className="list-disc ml-10 text-neutral-600 font-medium text-lg">
                            <li> Encourage family dinners and social cooking.</li>
                            <li> Reduce reliance on single-use packaging and delivery waste.</li>
                            <li> Spark curiosity about seasonal produce and local agriculture.</li>
                        </ul>
                    </div>
                    <img src={about} className=" rounded-lg"/>
                </div>
            </section>
            <BrowseRecipes/>
        </>
    )
}

export default About;