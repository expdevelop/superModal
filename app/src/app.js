let modal = new superModal({
    alert: {
        title: "Confirm your action:",
        text: "superModal.alert() is opened!",
        button: "Ok",
        fn: function() {
            console.log("Alert is closed!");
        }
    },
    confirm: {
        content: {
            title: "Effective Firearms Regulation Is Constitutional",
            text: "The sudden death of Justice Antonin Scalia of the Supreme Court brought renewed attention to one of his more heralded — and criticized — decisions: District of Columbia v. Heller, in which the court, by a 5-4 vote, held that the Second Amendment conferred an individual right “to keep and bear arms.”The principal objection to tough gun laws is that they violate the Second Amendment. Opponents of gun control cite the 2008 Heller decision as proof that the Supreme Court agreesThere is reason to doubt the soundness of that opinion. But even if the decision is not reversed, we believe it poses no obstacle for much stronger gun laws.The need for tougher measures is clear. The federal law requiring a background check for a gun purchase can be summarized this way: People who want to buy guns have to submit to a background check, unless they don’t want to.The Brady Bill’s background-check requirement applies only to sales by licensed firearms dealers. Virtually all resales of guns by private individuals are left unregulated. Calling this a “gun show loophole” considerably understates matters. The entire secondary gun market is a vast regulatory void.The consequences of this gap are dire. Criminals want to avoid background checks and guns that can be traced to them. Surveys of offenders consistently show that a vast majority did not obtain their firearms from licensed dealers, thereby avoiding background checks.A more effective system would require everyone who owns or acquires a gun to register it. Gun owners would also need a license that could be obtained by demonstrating they can use a gun responsibly, and passing a background check.Registration records would create a comprehensive database of all guns and their owners. During a criminal investigation, when a gun was recovered from a person who was not its registered owner, that person would face serious penalties. But so, too, would the registered owner if he had failed to report that the weapon was no longer in his possession.Under this system, anyone selling or possessing unregistered firearms would face huge legal risks. Overnight, gunrunning and other illegal arms trafficking would become easier to prosecute.Emerging technology will also help. Registration could include recording the unique characteristics of a firearm’s barrel. That, combined with stamping ammunition with identifiers, could someday make shooting at someone much like leaving fingerprints at the scene of the crime. Firearms offenders would become far easier to catch, and the prevalence of firearms crime would decline.Tough gun laws along these lines can work. Registration would not prevent law-abiding people from owning guns, but it would make life far more difficult for criminals.Of course, the Republican-controlled Congress is hostile to virtually all firearms regulation, and debate is usually short-circuited by claims that the Second Amendment forbids it. But the Heller decision contains no such prohibition on effective gun regulation.The Second Amendment is the only provision in the Bill of Rights with a preamble, which announces its purpose: “A well regulated militia, being necessary to the security of a free state, the right of the people to keep and bear arms, shall not be infringed.” The Heller decision, in turn, described the “militia” not as a formal military organization, but as everyone qualified to keep and bear arms."
        },
        buttons: {
            decline: {
                content: "Cancel",
                fn: function() {
                    console.log("Cancel is pushed!");
                }
            },
            accept: {
                content: "Confirm",
                fn: function() {
                    console.log("Confirm is pushed!");
                }
            }
        }
    },
    paste: {
        content: {
            title: ".paste Title",
            html: '<div> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"> <g id="Close"> <path d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/> </g> </svg> </div>'
        },
        buttons: {
            decline: {
                content: "Cancel",
                fn: function() {
                    console.log("Cancel on .paste() is pushed!");
                }
            },
            accept: {
                content: "Confirm",
                fn: function() {
                    console.log("Confirm on .paste() is pushed!");
                }
            }
        }
    },
    image: {
        src: 'https://pp.vk.me/c628818/v628818448/339af/ctuMcovryZI.jpg',
        fn: function() {
            console.log("Image is pushed!");
        }
    }
});

let btns = document.querySelectorAll(".btn");

for (let i = 0, l = btns.length; i < l; i++) {
    let btn = btns[i],
        fn = btn.getAttribute("data-click");
    //console.log(fn);
    btn.onclick = function() {
        modal[fn].call(modal);
    };
}