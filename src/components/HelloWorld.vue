<template>
  <div class="home-container">
    <div class="home-firstpage">
      <div class="home-header">
        <div class="home-headercol">
          <div class="home-prochainement">
            <span class="home-text">
              <span class="home-text01">Prochainement !</span>
              <br />
            </span>
          </div>
          <div class="home-titre">
            <h1 class="home-text03">
              <span class="home-text04">Gagner de l&apos;argent en</span>
              <br />
              <span class="home-text06">répondant à des sondages.</span>
              <span><span v-html="rawrwwx"></span></span>
            </h1>
          </div>
          <div class="home-container01">
            <div class="home-container02">
              <div class="home-description">
                <p class="home-text08">
                  <span class="home-text10">
                    Inscrivez-vous pour être prévenu(e) lors de l&apos;ouverture de
                    Giveback My Money et obtenir un bonus de
                  </span>
                  <span class="home-text11"><span v-html="rawa1b0"></span></span>
                  <span class="home-text12">25%</span>
                  <span class="home-text13"><span v-html="rawt7ms"></span></span>
                  <span class="home-text14">
                    supplémentaire sur vos retrait pendant 1 mois !
                  </span>
                </p>
              </div>
              <div class="home-compteur">
                <div class="home-container03">
                  <span class="home-text15">29 : 22 : 25 : 20</span>
                  <div class="home-container04">
                    <div class="home-container05">
                      <span class="home-text16">days</span>
                    </div>
                    <div class="home-container06">
                      <span class="home-text17">
                        <span>hours</span>
                        <br />
                      </span>
                    </div>
                    <div class="home-container07">
                      <span class="home-text20">minutes</span>
                    </div>
                    <div class="home-container08">
                      <span class="home-text21">
                        <span>seconds</span>
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="home-sociallog">
                <div class="home-continuewith-apple-centre-fixed">
                  <img
                    alt="AppleLogo4382"
                    src="/external/applelogo4382-7tc9.svg"
                    loading="eager"
                    class="home-apple-logo"
                  />
                  <span class="home-text24">
                    <span class="home-text25">Continue with Apple</span>
                    <br />
                  </span>
                  <div class="home-frame6"></div>
                </div>
                <div class="home-container09"></div>
                <div @click="handleSignInGoogle" class="home-continuewith-apple-centre-fixed1" >
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-4vl-1500h.png"
                    class="home-pasted-image"
                  />
                  <span class="home-text27">
                    <button class="home-text28" >Continue with Google</button>
                    <br />
                  </span>
                  <div class="home-frame61"></div>
                </div>
              </div>
              <div class="home-maillog" @click="toggleCard">
                <div class="home-continuewithmail">
                  <span class="home-text30">
                    <span class="home-text31">Continue with email</span>
                    <br />
                  </span>
                  <div class="home-frame62"></div>
                </div>
              </div>
            </div>
            <div class="home-leftpic">
              <div class="home-container10">
                <div class="home-card01">
                  <div class="home-image322f4df651c02b5a03e27185d79565171">
                    <img
                      alt="image"
                      src="https://cdn.revucreatives.com/creatives/09d4df29132b51de846551f7486a57d0.jpg"
                      class="home-image"
                    />
                  </div>
                  <div class="home-info">
                    <span class="home-text33">
                      <span>
                        Uber Eats -
                        <span v-html="rawdur1"></span>
                      </span>
                      <br />
                      <span>
                        Place your first order
                        <span v-html="raw1j26"></span>
                      </span>
                    </span>
                    <span class="home-text37">
                      <span>€</span>
                      <span>10,11</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="home-container11">
                <div class="home-card011">
                  <img
                    alt="IMAGE322f4df651c02b5a03e27185d795651711300"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fappskeen.com%2FCoinMaster%2Fimg%2Ffavicon.png&amp;f=1&amp;nofb=1&amp;ipt=f2e816f9c4a3ca13768db05ddc96f6c059c75246c78134b36b4bb06c9c6d6072&amp;ipo=images"
                    class="home-image322f4df651c02b5a03e27185d795651711"
                  />
                  <div class="home-info1">
                    <span class="home-text40">
                      Coin Master - Reach Village 36
                    </span>
                    <span class="home-text41">
                      <span>€</span>
                      <span>13,13</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="home-abstract">
                <img
                  alt="Frame101581"
                  src="/external/frame101581-47n7.svg"
                  class="home-frame10"
                />
                <img
                  alt="Frame91581"
                  src="/external/frame91581-zzqf.svg"
                  class="home-frame9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-scndpage">
      <div class="home-comment">
        <div class="home-frame7">
          <div class="home-container12">
            <h1 class="home-text44">
              <span class="home-text45">Comment fait-on</span>
              <br />
              <span class="home-text47">pour gagner ici ?</span>
              <span><span v-html="raw4n1p"></span></span>
            </h1>
          </div>
          <div class="home-container13">
            <div class="home-container14">
              <div class="home-cards">
                <div class="home-card">
                  <span class="home-text49">Jouez à des jeux</span>
                  <span class="home-text50">
                    <span>
                      Afin d&apos;attirer davantage de joueurs, les entreprises de
                      jeux vidéo veulent vous payer pour jouer à leurs jeux.
                      Jouons ensemble !
                    </span>
                  </span>
                  <span class="home-text52">
                    <span class="home-text53">
                      <span>Gagnez par application</span>
                      <br />
                      <span></span>
                    </span>
                    <span>$0.50 - $120</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="home-container15">
              <div class="home-cards1">
                <div class="home-card1">
                  <span class="home-text58">Complétez des offres</span>
                  <span class="home-text59">
                    Faites connaissance avec de nouvelles entreprises en essayant
                    leurs applications tout en gagnant de l&apos;argent. Il est
                    temps d&apos;être rémunéré pour l&apos;utilisation
                    d&apos;applications !
                  </span>
                  <span class="home-text60">
                    <span>Gagnez par application</span>
                    <br />
                    <span>$1.00 - $75</span>
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div class="home-container16">
              <div class="home-cards2">
                <div class="home-card2">
                  <span class="home-text65">Rejoignez des sondages</span>
                  <span class="home-text66">
                    Les entreprises ont besoin de votre opinion pour créer de
                    meilleurs produits et services. C&apos;est pourquoi elles vous
                    rémunèrent pour vos commentaires.
                  </span>
                  <span class="home-text67">
                    <span>Gagnez par sondage</span>
                    <br />
                    <span>$0.50 - $1.50</span>
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="home-container17">
            <div class="home-container18">
              <div class="home-container19">
                <img
                  alt="image"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  class="home-image1"
                />
                <img
                  alt="image"
                  src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg"
                  class="home-image2"
                />
              </div>
              <div class="home-container20">
                <img
                  alt="image"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe5%2F41%2Fbb%2Fe541bb8e92ceecd5c724a0816f80d86d.png&amp;f=1&amp;nofb=1&amp;ipt=7224074ff858de7d4b2a2d6a79332ed75233102d6a9a98163bdf8f5106d2a7f9&amp;ipo=images"
                  class="home-image3"
                />
                <div class="home-amazon">
                  <img
                    alt="Vector2411"
                    src="/external/vector2411-2e1r.svg"
                    class="home-vector"
                  />
                  <img
                    alt="Vector2411"
                    src="/external/vector2411-qtqk.svg"
                    class="home-vector1"
                  />
                  <img
                    alt="Vector2411"
                    src="/external/vector2411-6fv.svg"
                    class="home-vector2"
                  />
                  <img
                    alt="Vector2410"
                    src="/external/vector2410-u5ym.svg"
                    class="home-vector3"
                  />
                  <img
                    alt="Vector2411"
                    src="/external/vector2411-twf.svg"
                    class="home-vector4"
                  />
                  <img
                    alt="Vector2411"
                    src="/external/vector2411-rmg.svg"
                    class="home-vector5"
                  />
                </div>
              </div>
              <div class="home-container21">
                <img
                  alt="image"
                  src="https://cdn.freebiesupply.com/images/large/2x/playstation-logo-png-transparent.png"
                  class="home-image4"
                />
                <img
                  alt="image"
                  src="https://cdn.pixabay.com/photo/2017/07/27/21/37/bitcoin-2546854_960_720.png"
                  class="home-image5"
                />
              </div>
              <div class="home-container22">
                <div class="home-eth">
                  <img
                    alt="Vector2491"
                    src="/external/vector2491-czl.svg"
                    class="home-vector6"
                  />
                </div>
                <div class="home-litcoin">
                  <img
                    alt="Vector2488"
                    src="/external/vector2488-ueah.svg"
                    class="home-vector7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-treepage">
      <div class="home-comment1">
        <div class="home-frame71">
          <div class="home-container23">
            <h1 class="home-text72">
              <span>Pourquoi nous et pas un autre ?</span>
              <br />
              <span class="home-text75">Voici pourquoi!</span>
              <br />
              <span><span v-html="rawy3fr"></span></span>
            </h1>
          </div>
          <div class="home-container24">
            <div class="home-container25">
              <div class="home-cards3">
                <div class="home-card3">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-rlq-200h.png"
                    class="home-pasted-image1"
                  />
                  <span class="home-text78">Retraits instantanés</span>
                  <span class="home-text79">
                    Besoin de vos gains maintenant ? Pas de problème. Vous pouvez
                    les retirer presque instantanément à partir de 2,0 $.
                  </span>
                </div>
              </div>
            </div>
            <div class="home-container26">
              <div class="home-cards4">
                <div class="home-card4">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-bcok-200h.png"
                    class="home-pasted-image2"
                  />
                  <span class="home-text80">Support réactif 24/24</span>
                  <span class="home-text81">
                    Un support réactif grâce à notre assistance basée sur
                    l&apos;IA, assurant des réponses immédiates, même la nuit ! En
                    cas de problème nécessitant une intervention humaine, elle
                    sera réalisée dans les 24 heures.
                  </span>
                </div>
              </div>
            </div>
            <div class="home-container27">
              <div class="home-cards5">
                <div class="home-card5">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-qrjr-200h.png"
                    class="home-pasted-image3"
                  />
                  <span class="home-text82">Paiements les plus élevés</span>
                  <span class="home-text83">
                    <span>
                      Gagnez bien plus que sur d&apos;autres sites. Notre objectif
                      est de vous aider à gagner autant d&apos;argent que
                      possible.
                    </span>
                    <br />
                  </span>
                </div>
              </div>
                
  </div>
          </div>
            <div>
            <div>
                 <div>

                 <button @click="awesome = !awesome">Toggle</button>

                <h1 v-if="awesome">Vue is awesome!</h1>
                <h1 v-else>Oh no 😢</h1>
                <div>

        
                  <div class="overlay" v-if="showCard" >                  
                    <div class="card-container">
                    <transition name="card">
                      <div v-if="showCard" class="card">
                        <!-- Contenu de la carte -->
                        <form @submit.prevent="signUp">
                          <h2>Sign Up</h2>
                            <input type="text"     placeholder="Username" required v-model="username">
                            <input type="email"    placeholder="Email"    required v-model="email">
                            <input type="password" placeholder="Password" required v-model="password">
                            <button>Sign Up</button>
                          
                          </form>
                          <form id="signup-form">
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label class="col-form-label col-form-label-lg">Full Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control form-control-lg">
                                </div>
                                <div class="col-12 form-group">
                                    <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
                                    <input type="email" class="form-control form-control-lg">
                                </div>
                                <div class="col-12 form-group">
                                    <label class="col-form-label col-form-label-lg">Country <span class="text-danger">*</span></label>
                                    <select class="form-control form-control-lg">
                                        <option value="">Select Country</option>
                                    </select>
                                </div>
                                <div class="col-12 form-group">
                                    <label class="col-form-label col-form-label-lg">Password <span class="text-danger">*</span></label>
                                    <input type="password" class="form-control form-control-lg">
                                </div>
                                <div class="col-12 form-group text-center">
                                    <button class="btn btn-vue btn-lg col-4">Sign Up</button>
                                </div>
                            </div>
                        </form>
                      </div>
                    </transition>
                  </div></div>
                </div>
        </div>

        </div>
    <!-- Votre contenu existant -->

    <button @click="signInWithGoogle">Se connecter avec Google</button>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from "firebase/auth";

firebaseConfig

const provider = new GoogleAuthProvider();

const auth = getAuth();
export default {

  name: 'HelloWorldComponent',
  data() {
    return {
      awesome: false,
      user: '',
      username: '',
      email: '',
      password: '',
      isSignedIn: false,
      showCard: false,
    }
  },
methods: {
  toggleCard() {
          this.showCard = !this.showCard;
        },
  handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {          
          // const user = result.user;
          // console.log(result.user.displayName)
          this.user = result.user.displayName;
          this.isSignedIn = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    signUp() {
      // register new user
      createUserWithEmailAndPassword(auth,this.email,this.password)
      .then((credential) => {
        // registered and signed in
        console.log(credential.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  },
  metaInfo: {
    title: 'Givebackmymoney',
    meta: [
      {
        property: 'og:title',
        content: 'Givebackmymoney',
      },
    ],
  },
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-firstpage {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.card-container {
  position: relative;
  z-index: 100;
}

.card {
  width: 300px;
  padding: 20px;
  background-color: rgb(199, 32, 32);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px);
  transition: opacity 0.5s, transform 0.5s;
  z-index: 1;
}

.card-enter-active, .card-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.card-enter, .card-leave-to /* .card-leave-active in <2.1.8 */ {
  transform: translateY(20px);
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.home-header {
  flex: 1;
  width: 90%;
  height: 90%;
  margin: 3%;
  display: flex;
  align-self: center;
  margin-top: 5%;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  flex-direction: column;
  justify-content: center;
}
.home-headercol {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-prochainement {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin: 8px;
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-left: 24px;
  border-radius: 30px;
  padding-right: 24px;
  padding-bottom: 24px;
  justify-content: center;
  background-color: #e8ffe4;
}
.home-text {
  color: rgb(3, 166, 107);
  font-size: 1.5em;
}
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
      transition: opacity 0.5s;
    }

    .button {
      background-color: #3498db;
      color: white;
      padding: 10px 20px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      font-size: 16px;
    }
.home-titre {
  gap: 0t;
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.home-text03 {
  font-size: 6em;
  align-self: center;
  font-style: normal;
  margin-top: 8px;
  font-family: "Poppins";
  font-weight: 700;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.home-text04 {
  color: #2e2e2e;
}
.home-text06 {
  color: #a969ae;
}
.home-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.home-container02 {
  flex: 0 0 auto;
  width: 60%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-description {
  gap: 0t;
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-text08 {
  width: auto;
  margin: 8px;
  font-size: 2.1em;
  font-family: "Poppins";
}
.home-text09 {
  color: rgb(103, 103, 103);
  font-style: normal;
}
.home-text10 {
  color: rgb(103, 103, 103);
  font-style: normal;
}
.home-text11 {
  color: rgb(103, 103, 103);
}
.home-text12 {
  color: rgb(103, 103, 103);
}
.home-text13 {
  color: rgb(103, 103, 103);
}
.home-text14 {
  color: rgb(103, 103, 103);
  font-style: normal;
}
.home-compteur {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin: 0px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.home-container03 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text15 {
  color: rgb(46, 46, 46);
  font-size: 6em;
  font-style: normal;
  margin-top: 32px;
  font-family: "Poppins";
  font-weight: 600;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 0px;
}
.home-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  margin-top: -15px;
  align-items: flex-start;
  margin-bottom: -15px;
}
.home-container05 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.home-text16 {
  color: rgb(46, 46, 46);
  font-size: 2em;
  align-self: center;
  font-style: normal;
  font-family: "Poppins";
  font-weight: 600;
}
.home-container06 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.home-text17 {
  color: rgb(46, 46, 46);
  font-size: 2em;
  align-self: center;
  font-style: normal;
  font-family: "Poppins";
  font-weight: 600;
}
.home-container07 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.home-text20 {
  color: rgb(46, 46, 46);
  font-size: 2em;
  align-self: center;
  font-style: normal;
  font-family: "Poppins";
  font-weight: 600;
}
.home-container08 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.home-text21 {
  color: rgb(46, 46, 46);
  font-size: 2em;
  align-self: center;
  font-style: normal;
  font-family: "Poppins";
  font-weight: 600;
}
.home-sociallog {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: 80px;
  align-items: center;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  justify-content: center;
}
.home-continuewith-apple-centre-fixed {
  gap: 10px;
  width: 46%;
  display: flex;
  padding: 0 50px;
  align-self: center;
  box-shadow: 5px 5px 30px 0px #d4d4d4;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
}
.home-apple-logo {
  width: auto;
  height: 2em;
  position: static;
}
.home-text24 {
  color: #FFFFFF;
  height: auto;
  position: static;
  font-size: 1.7em;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: "Roboto";
  font-weight: 400;
  line-height: normal;
  padding-top: 0.8em;
  font-stretch: normal;
  padding-bottom: 0.8em;
  text-decoration: none;
}
.home-frame6 {
  gap: 15px;
  width: 244px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 54px;
  display: none;
  padding: 15px;
  position: relative;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 1);
}
.home-container09 {
  flex: 0 0 auto;
  width: 8%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(255, 255, 255, 0);
}
.home-continuewith-apple-centre-fixed1 {
  transition: ease 0.1s all;
  gap: 10px;
  width: 46%;
  display: flex;
  padding: 0 50px;
  align-self: center;
  box-shadow: 5px 5px 30px 0px #d4d4d4;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #FFFFFF;
}
.home-continuewith-apple-centre-fixed1:hover{
  box-shadow: 5px 5px 30px 0px #d4d4d4, inset 3px 4px 20px 3px #d4d4d4;
}
.home-pasted-image {
  height: 2em;
}
.home-text27 {
  top: 15px;
  left: 54px;
  color: #000000;
  height: auto;
  position: static;
  font-size: 1.7em;
  align-self: center;
  font-style: Medium;
  text-align: left;
  font-family: "Roboto";
  font-weight: 400;
  line-height: normal;
  padding-top: 0.8em;
  font-stretch: normal;
  padding-bottom: 0.8em;
  text-decoration: none;
}
.home-frame61 {
  gap: 15px;
  width: 244px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 54px;
  display: none;
  padding: 15px;
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 1);
}
.home-maillog {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  align-self: center;
  margin-top: 2%;
  align-items: center;
  margin-bottom: 2%;
  justify-content: center;
}
.home-continuewithmail {
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 0 50px;
  align-self: center;
  box-shadow: 5px 5px 30px 0px #d4d4d4;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #292929;
}
.home-text30 {
  color: #FFFFFF;
  height: auto;
  position: static;
  font-size: 1.7em;
  align-self: center;
  font-style: Medium;
  text-align: left;
  font-family: "Roboto";
  font-weight: 400;
  line-height: normal;
  padding-top: 0.8em;
  font-stretch: normal;
  padding-bottom: 0.8em;
  text-decoration: none;
}
.home-frame62 {
  gap: 15px;
  width: 480px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 54px;
  display: none;
  padding: 15px;
  position: relative;
  align-items: flex-start;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 1);
}
.home-leftpic {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}
.home-container10 {
  top: 180px;
  flex: 0 0 auto;
  left: 640px;
  right: 0;
  width: 249px;
  height: 364px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-card01 {
  gap: 10px;
  width: auto;
  height: 100%;
  display: flex;
  position: relative;
  box-shadow: 0px 50px 60px 0px rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  border-radius: 22px;
  flex-direction: column;
  background-color: #FFFFFF;
}
.home-image322f4df651c02b5a03e27185d79565171 {
  top: 78.16595458984375px;
  left: 43.235626220703125px;
  width: auto;
  height: auto;
  display: flex;
  z-index: 0;
  position: static;
  align-self: center;
  margin-top: OneAndHalfUnits;
  align-items: center;
  border-radius: 12px;
  background-size: cover;
  justify-content: center;
  background-position: center;
}
.home-image {
  flex: 1;
  width: 120px;
  height: auto;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  object-fit: cover;
  border-radius: 15px;
}
.home-info {
  width: auto;
  height: auto;
  margin: 16px;
  display: flex;
  z-index: 0;
  position: static;
  align-self: center;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: center;
}
.home-text33 {
  color: rgb(46, 46, 46);
  width: 90%;
  height: auto;
  margin: 8px;
  position: static;
  font-size: 24px;
  font-style: SemiBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-text37 {
  top: 78.05784606933594px;
  left: 2.0453414916992188px;
  color: rgb(46, 46, 46);
  width: auto;
  height: auto;
  position: static;
  font-size: 35px;
  font-style: Bold;
  margin-top: 24px;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  line-height: 20px;
  font-stretch: normal;
  text-decoration: none;
}
.home-container11 {
  top: 96px;
  flex: 0 0 auto;
  left: 340px;
  width: 249px;
  height: 364px;
  display: flex;
  z-index: 1;
  position: absolute;
  align-self: center;
  align-items: flex-start;
  margin-bottom: auto;
  flex-direction: column;
  justify-content: center;
}
.home-card011 {
  gap: 10px;
  width: auto;
  height: 100%;
  display: flex;
  position: relative;
  box-shadow: 0px 50px 60px 0px rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  border-radius: 22px;
  flex-direction: column;
  background-color: #FFFFFF;
}
.home-image322f4df651c02b5a03e27185d795651711 {
  left: 43.235626220703125px;
  width: 120px;
  height: auto;
  z-index: 0;
  position: static;
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: 24px;
  border-radius: 26px;
}
.home-info1 {
  top: 186.77685546875px;
  left: 47.13360595703125px;
  width: auto;
  height: auto;
  margin: 16px;
  display: flex;
  z-index: 0;
  position: static;
  align-self: center;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: center;
}
.home-text40 {
  color: rgba(46, 46, 46, 1);
  width: 90%;
  height: auto;
  margin: 8px;
  position: static;
  font-size: 24px;
  font-style: SemiBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-text41 {
  top: 78.05784606933594px;
  left: 2.0453414916992188px;
  color: rgba(46, 46, 46, 1);
  width: auto;
  height: auto;
  position: static;
  font-size: 35px;
  font-style: Bold;
  margin-top: 24px;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  line-height: 20px;
  font-stretch: normal;
  text-decoration: none;
}
.home-abstract {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-end;
  flex-shrink: 0;
  flex-direction: column;
}
.home-frame10 {
  top: -160px;
  left: 370px;
  right: 0px;
  width: 83px;
  height: 66px;
  margin: auto;
  position: absolute;
}
.home-frame9 {
  top: 7px;
  left: 330px;
  right: 0px;
  width: 193px;
  bottom: 0px;
  height: 241px;
  margin: auto;
  z-index: 0;
  position: absolute;
}
.home-scndpage {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: column;
}
.home-comment {
  gap: 69px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-frame7 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-text44 {
  width: 70%;
  padding: 24px;
  font-size: 4em;
  align-self: center;
  font-style: normal;
  margin-top: 8px;
  text-align: center;
  font-family: "Poppins";
  font-weight: 700;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.home-text45 {
  color: #2e2e2e;
}
.home-text47 {
  color: #a969ae;
}
.home-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  margin-top: 16px;
  align-items: center;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: center;
}
.home-container14 {
  flex: 0 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.home-cards {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
}
.home-card {
  gap: 29px;
  width: auto;
  height: 100%;
  display: flex;
  padding: 32px;
  box-shadow: 0px 30px 80px -10px rgba(0, 0, 0, 0.11999999731779099) ;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.home-text49 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: inherit;
  font-stretch: normal;
  text-decoration: none;
}
.home-text50 {
  color: rgba(103, 103, 103, 1);
  width: auto;
  height: auto;
  font-size: 15;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-text52 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  margin: 16px;
  font-size: 16px;
  font-style: Semi Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: 20px;
  font-stretch: normal;
  text-decoration: none;
}
.home-text53 {
  font-weight: 700;
}
.home-container15 {
  flex: 0 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
}
.home-cards1 {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
}
.home-card1 {
  gap: 29px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 32px;
  box-shadow: 0px 30px 80px -10px rgba(0, 0, 0, 0.11999999731779099) ;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.home-text58 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: inherit;
  font-stretch: normal;
  text-decoration: none;
}
.home-text59 {
  color: rgba(103, 103, 103, 1);
  width: auto;
  height: auto;
  font-size: 15;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-text60 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  margin: 16px;
  font-size: 16px;
  font-style: Semi Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: 20px;
  font-stretch: normal;
  text-decoration: none;
}
.home-container16 {
  flex: 0 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.home-cards2 {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
}
.home-card2 {
  gap: 29px;
  width: auto;
  height: 100%;
  display: flex;
  padding: 32px;
  box-shadow: 0px 30px 80px -10px rgba(0, 0, 0, 0.11999999731779099) ;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.home-text65 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: inherit;
  font-stretch: normal;
  text-decoration: none;
}
.home-text66 {
  color: rgba(103, 103, 103, 1);
  width: auto;
  height: auto;
  font-size: 15;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-text67 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  margin: 16px;
  font-size: 16px;
  font-style: Semi Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: 20px;
  font-stretch: normal;
  text-decoration: none;
}
.home-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: 288px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-container18 {
  flex: 0 0 auto;
  width: auto;
  height: 50%;
  display: flex;
  padding: 80px;
  position: relative;
  box-shadow: 0px 30px 80px -10px #d4d4d4;
  align-items: center;
  border-radius: 22px;
  justify-content: center;
  background-color: #FFFFFF;
}
.home-container19 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-image1 {
  width: auto;
  height: 50px;
  object-fit: cover;
  margin-right: 64px;
}
.home-image2 {
  width: auto;
  height: 50px;
  object-fit: cover;
  margin-right: 64px;
}
.home-container20 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-image3 {
  width: auto;
  height: 50px;
  object-fit: cover;
  margin-right: 64px;
}
.home-amazon {
  width: auto;
  height: 50px;
  display: flex;
  position: static;
  align-items: center;
  margin-right: 64px;
}
.home-vector {
  width: auto;
  height: 40px;
  position: static;
  align-self: center;
}
.home-vector1 {
  width: auto;
  height: 40px;
  position: static;
  align-self: center;
}
.home-vector2 {
  width: auto;
  height: 40px;
  position: static;
  align-self: center;
}
.home-vector3 {
  width: auto;
  height: 40px;
  position: static;
  align-self: center;
}
.home-vector4 {
  width: auto;
  height: 40px;
  position: static;
  align-self: center;
}
.home-vector5 {
  width: auto;
  height: 40px;
  position: static;
  align-self: center;
}
.home-container21 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-image4 {
  width: auto;
  height: 50px;
  object-fit: cover;
  margin-right: 64px;
}
.home-image5 {
  width: auto;
  height: 50px;
  object-fit: cover;
  margin-right: 64px;
}
.home-container22 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-eth {
  width: auto;
  height: auto;
  display: flex;
  z-index: 9;
  position: static;
  align-items: flex-start;
  flex-shrink: 1;
}
.home-vector6 {
  width: auto;
  height: 50px;
  position: static;
  margin-right: 64px;
}
.home-litcoin {
  width: auto;
  height: auto;
  display: flex;
  position: static;
  align-items: flex-start;
  flex-shrink: 1;
  margin-right: 64px;
}
.home-vector7 {
  width: auto;
  height: 50px;
  position: static;
}
.home-treepage {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: column;
}
.home-comment1 {
  gap: 69px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-frame71 {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-container23 {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: center;
}
.home-text72 {
  width: 70%;
  padding: 24px;
  font-size: 4em;
  align-self: center;
  font-style: normal;
  margin-top: 8px;
  text-align: center;
  font-family: "Poppins";
  font-weight: 700;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.home-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  margin-top: 5%;
  align-items: flex-start;
  margin-bottom: 10%;
  flex-direction: row;
  justify-content: center;
}
.home-container25 {
  flex: 0 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  margin-top: 64px;
  align-items: flex-start;
  justify-content: flex-start;
}
.home-cards3 {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.home-card3 {
  gap: 29px;
  width: auto;
  height: 100%;
  display: flex;
  padding: 32px;
  box-shadow: 0px 30px 80px -10px rgba(0, 0, 0, 0.11999999731779099) ;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.home-pasted-image1 {
  width: auto;
  height: 20%;
  align-self: center;
}
.home-text78 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: inherit;
  font-stretch: normal;
  text-decoration: none;
}
.home-text79 {
  color: rgba(103, 103, 103, 1);
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-container26 {
  flex: 0 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  margin-left: 5%;
  margin-right: 5%;
  flex-direction: row;
  justify-content: center;
}
.home-cards4 {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
.home-card4 {
  gap: 29px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 32px;
  box-shadow: 0px 30px 80px -10px rgba(0, 0, 0, 0.11999999731779099) ;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.home-pasted-image2 {
  width: auto;
  height: 20%;
}
.home-text80 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: inherit;
  font-stretch: normal;
  text-decoration: none;
}
.home-text81 {
  color: rgba(103, 103, 103, 1);
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-container27 {
  flex: 0 0 auto;
  width: 400px;
  height: 400px;
  display: flex;
  margin-top: 64px;
  align-items: flex-start;
}
.home-cards5 {
  gap: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
.home-card5 {
  gap: 29px;
  width: auto;
  height: 100%;
  display: flex;
  padding: 32px;
  box-shadow: 0px 30px 80px -10px rgba(0, 0, 0, 0.11999999731779099) ;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.home-pasted-image3 {
  width: auto;
  height: 20%;
}
.home-text82 {
  color: rgba(46, 46, 46, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: inherit;
  font-stretch: normal;
  text-decoration: none;
}
.home-text83 {
  color: rgba(103, 103, 103, 1);
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
@media(max-width: 1920px) {
  .home-container {
    justify-content: flex-start;
  }
  .home-firstpage {
    width: auto;
    height: auto;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    justify-content: flex-start;
  }
  .home-header {
    width: 86%;
    height: 100%;
    align-self: center;
    margin-top: 4%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
    justify-content: flex-start;
  }
  .home-prochainement {
    margin-top: 16px;
    margin-left: 0px;
    padding-top: 24px;
    margin-right: 0px;
    padding-left: 32px;
    margin-bottom: 0px;
    padding-right: 32px;
    padding-bottom: 24px;
    background-color: #E8FFE4;
  }
  .home-text {
    color: rgb(3, 166, 107);
    font-size: 1.2em;
  }
  .home-text03 {
    margin: 0px;
    font-size: 6em;
    font-style: normal;
    margin-top: 8px;
    font-family: Poppins;
    font-weight: 700;
    line-height: 1.25;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
  }
  .home-text04 {
    color: #2e2e2e;
  }
  .home-text06 {
    color: #a969ae;
  }
  .home-container01 {
    width: auto;
    height: auto;
    position: relative;
    flex-direction: row;
  }
  .home-container02 {
    width: 62%;
    flex-direction: column;
  }
  .home-description {
    align-self: flex-start;
  }
  .home-text08 {
    font-size: 30px;
    align-self: flex-start;
    margin-top: 16px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.4;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
  .home-text09 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text10 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text11 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text12 {
    color: #a969ae;
    font-style: inherit;
    font-weight: 800;
  }
  .home-text13 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text14 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-compteur {
    width: 70%;
    margin-top: 8px;
    margin-bottom: 32px;
    flex-direction: row;
  }
  .home-container03 {
    width: auto;
    justify-content: center;
  }
  .home-text15 {
    color: rgb(46, 46, 46);
    font-size: 6em;
    font-style: normal;
    margin-top: 16px;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text16 {
    color: rgb(46, 46, 46);
    font-size: 2em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text17 {
    color: rgb(46, 46, 46);
    font-size: 2em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text20 {
    color: rgb(46, 46, 46);
    font-size: 2em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text21 {
    color: rgb(46, 46, 46);
    font-size: 2em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text24 {
    color: rgb(255, 255, 255);
  }
  .home-text25 {
    font-size: 1em;
  }
  .home-text28 {
    font-size: 1em;
  }
  .home-text31 {
    font-size: 1em;
  }
  .home-container10 {
    top: 180px;
    left: 380px;
    right: 0px;
    width: 249px;
    height: 364px;
  }
  .home-container11 {
    top: 96px;
    left: 96px;
    width: 249px;
    height: 364px;
  }
  .home-scndpage {
    width: 100%;
    height: 100%;
  }
  .home-container12 {
    margin-bottom: 48px;
  }
  .home-text47 {
    color: #a969ae;
  }
  .home-eth {
    position: static;
  }
  .home-comment1 {
    height: auto;
    flex-direction: column;
  }
  .home-text75 {
    color: #d9b8df;
  }
  .home-pasted-image2 {
    width: auto;
    height: 20%;
  }
  .home-text83 {
    color: rgb(103, 103, 103);
  }
}
@media(max-width: 1366px) {
  .home-text {
    color: rgb(3, 166, 107);
  }
  .home-text01 {
    width: auto;
  }
  .home-text03 {
    font-size: 4em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
    line-height: 1.25;
  }
  .home-text04 {
    color: #2e2e2e;
  }
  .home-text06 {
    color: #a969ae;
  }
  .home-container01 {
    justify-content: flex-start;
  }
  .home-container02 {
    width: 80%;
    align-self: center;
    align-items: center;
    align-content: center;
  }
  .home-text08 {
    font-size: 25px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.4;
  }
  .home-text09 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text10 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text11 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text12 {
    color: #a969ae;
    font-style: inherit;
    font-weight: 800;
  }
  .home-text13 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text14 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-sociallog {
    margin-top: 48px;
  }
  .home-leftpic {
    display: none;
  }
  .home-container12 {
    margin-bottom: 16px;
  }
  .home-container13 {
    width: 95%;
    align-self: center;
    margin-left: 16px;
    margin-right: 16px;
  }
  .home-container14 {
    flex: 1;
  }
  .home-container15 {
    flex: 1;
  }
  .home-container16 {
    flex: 1;
  }
  .home-cards2 {
    flex: 1;
  }
  .home-container18 {
    height: 50%;
    padding: 48px;
  }
  .home-image1 {
    height: 40px;
  }
  .home-image2 {
    height: 40px;
  }
  .home-image3 {
    height: 40px;
  }
  .home-amazon {
    height: 40px;
  }
  .home-image4 {
    height: 40px;
  }
  .home-image5 {
    height: 40px;
  }
  .home-vector6 {
    height: 40px;
  }
  .home-vector7 {
    height: 40px;
  }
}
@media(max-width: 991px) {
  .home-text03 {
    font-size: 4em;
  }
  .home-container02 {
    width: 100%;
  }
  .home-compteur {
    width: 100%;
    align-self: center;
    margin-bottom: 24px;
  }
  .home-continuewith-apple-centre-fixed1 {
    padding-left: 40px;
    padding-right: 40px;
  }
  .home-text27 {
    color: #000000;
  }
  .button {
    color: #000000;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-color: #000000;
    border-width: 1px;
    border-radius: 4px;
    background-color: #FFFFFF;
  }
  .input {
    color: #000000;
    cursor: auto;
    padding: 0.5rem 1rem;
    border-color: #000000;
    border-width: 1px;
    border-radius: 4px;
    background-color: #FFFFFF;
  }
  .textarea {
    color: #000000;
    cursor: auto;
    padding: 0.5rem;
    border-color: #000000;
    border-width: 1px;
    border-radius: 4px;
    background-color: #FFFFFF;
  }
  .list {
    width: 100%;
    margin: 1em 0px 1em 0px;
    display: block;
    padding: 0px 0px 0px 1.5rem;
    list-style-type: none;
    list-style-position: outside;
  }
  .list-item {
    display: list-item;
  }
  .teleport-show {
    display: flex !important;
    transform: none !important;
  }
  .Heading {
    font-size: 32px;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    text-transform: none;
    text-decoration: none;
  }
  .Content {
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    text-transform: none;
    text-decoration: none;
  }
  .home-text28 {
    font-size: 1em;
  }
  .home-image1 {
    height: 30px;
    margin-right: 32px;
  }
  .home-image2 {
    height: 30px;
    margin-right: 32px;
  }
  .home-image3 {
    height: 30px;
    margin-right: 32px;
  }
  .home-amazon {
    height: 30px;
    margin-right: 32px;
  }
  .home-vector {
    height: auto;
  }
  .home-vector1 {
    height: auto;
  }
  .home-vector2 {
    height: auto;
  }
  .home-vector3 {
    height: auto;
  }
  .home-vector4 {
    height: auto;
  }
  .home-vector5 {
    height: auto;
  }
  .home-image4 {
    height: 30px;
    margin-right: 32px;
  }
  .home-image5 {
    height: 30px;
    margin-right: 32px;
  }
  .home-eth {
    margin-right: 32px;
  }
  .home-vector6 {
    height: 30px;
    margin-right: 0px;
  }
  .home-litcoin {
    margin-right: 32px;
  }
  .home-vector7 {
    height: 30px;
  }
  .home-text72 {
    font-size: 4em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .home-text75 {
    color: #d9b8df;
  }
  .home-container24 {
    width: 95%;
    align-self: center;
  }
  .home-container25 {
    flex: 1;
  }
  .home-text79 {
    color: rgb(103, 103, 103);
  }
  .home-container26 {
    flex: 1;
  }
  .home-text81 {
    color: rgb(103, 103, 103);
    font-size: 15px;
    font-family: Inter;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  .home-container27 {
    flex: 1;
  }
  .home-text83 {
    color: rgb(103, 103, 103);
    font-size: 20px;
    font-family: Inter;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
}
@media(max-width: 767px) {
  .home-continuewith-apple-centre-fixed1 {
    padding-left: 50px;
    padding-right: 50px;
  }
  .home-text44 {
    width: 100%;
    font-size: 4em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .home-text45 {
    color: #2e2e2e;
  }
  .home-text47 {
    color: #a969ae;
  }
  .home-container13 {
    flex-direction: column;
  }
  .home-container14 {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 32px;
  }
  .home-container15 {
    margin-bottom: 32px;
  }
  .home-container17 {
    width: auto;
    align-self: center;
  }
  .home-container18 {
    flex: 1;
    height: 40%;
    padding: 16px;
    z-index: 100;
  }
  .home-image1 {
    margin-right: 24px;
  }
  .home-image2 {
    margin-right: 24px;
  }
  .home-image3 {
    margin-right: 24px;
  }
  .home-amazon {
    margin-right: 24px;
  }
  .home-image4 {
    margin-right: 24px;
  }
  .home-image5 {
    margin-right: 24px;
  }
  .home-eth {
    margin-right: 24px;
  }
  .home-litcoin {
    margin-right: 24px;
  }
  .home-text72 {
    width: 100%;
  }
  .home-container24 {
    flex-direction: column;
  }
  .home-container25 {
    margin-top: 0px;
    margin-left: 24px;
    margin-bottom: 64px;
  }
  .home-pasted-image1 {
    width: 20%;
  }
  .home-container26 {
    align-self: flex-end;
    margin-left: 24px;
    margin-right: 24px;
  }
  .home-pasted-image2 {
    width: 20%;
  }
  .home-container27 {
    margin-left: 24px;
  }
  .home-pasted-image3 {
    width: 20%;
  }
}
@media(max-width: 450px) {
  .home-header {
    width: 95%;
  }
  .home-text {
    color: rgb(3, 166, 107);
    font-size: 1em;
  }
  .home-text03 {
    font-size: 2em;
  }
  .home-text04 {
    color: #2e2e2e;
  }
  .home-text06 {
    color: #a969ae;
  }
  .home-text08 {
    line-height: 1.4;
  }
  .home-text09 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text10 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text11 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text12 {
    color: #a969ae;
    font-style: inherit;
    font-weight: 800;
  }
  .home-text13 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text14 {
    color: #676767;
    font-style: normal;
    font-weight: 600;
  }
  .home-text15 {
    color: rgb(46, 46, 46);
    font-size: 40px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
    margin-left: 16px;
    margin-right: 16px;
  }
  .home-container04 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .home-text16 {
    color: rgb(46, 46, 46);
    font-size: 15px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text17 {
    color: rgb(46, 46, 46);
    font-size: 15px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text20 {
    color: rgb(46, 46, 46);
    font-size: 15px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-text21 {
    color: rgb(46, 46, 46);
    font-size: 15px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .home-sociallog {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .home-continuewith-apple-centre-fixed {
    padding: 10px;
  }
  .home-text24 {
    color: rgb(255, 255, 255);
    font-size: 10px;
    font-style: normal;
    font-family: Roboto;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  .home-text25 {
    font-size: 1em;
  }
  .home-continuewith-apple-centre-fixed1 {
    padding: 10px;
  }
  .home-text27 {
    color: #000000;
    font-size: 10px;
  }
  .home-text28 {
    font-size: 1em;
  }
  .home-continuewithmail {
    padding: 10px;
  }
  .home-text30 {
    color: #FFFFFF;
    padding: 10px;
    font-size: 15px;
  }
  .home-text31 {
    font-size: 1em;
  }
  .home-text44 {
    font-size: 2em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .home-text45 {
    color: #2e2e2e;
  }
  .home-text47 {
    color: #a969ae;
  }
  .home-container14 {
    width: auto;
  }
  .home-card {
    padding: 24px;
  }
  .home-container15 {
    width: auto;
  }
  .home-card1 {
    padding: 24px;
  }
  .home-container16 {
    width: auto;
  }
  .home-card2 {
    padding: 24px;
  }
  .home-container18 {
    width: auto;
    padding: 32px;
  }
  .home-container19 {
    width: auto;
    margin-right: 24px;
    flex-direction: column;
  }
  .home-image1 {
    align-self: center;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .home-image2 {
    align-self: center;
    margin-right: 0px;
  }
  .home-container20 {
    width: auto;
    margin-right: 24px;
    flex-direction: column;
  }
  .home-image3 {
    align-self: center;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .home-amazon {
    align-self: center;
    margin-right: 0px;
  }
  .home-container21 {
    width: auto;
    margin-right: 24px;
    flex-direction: column;
  }
  .home-image4 {
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .home-image5 {
    align-self: center;
    margin-right: 0px;
  }
  .home-container22 {
    width: auto;
    align-self: center;
    margin-right: 0px;
    flex-direction: column;
  }
  .home-eth {
    align-self: center;
    margin-right: 0px;
  }
  .home-vector6 {
    align-self: center;
    margin-bottom: 16px;
  }
  .home-litcoin {
    align-self: center;
    margin-right: 0px;
  }
  .home-container23 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .home-text72 {
    font-size: 2em;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .home-text75 {
    color: #d9b8df;
  }
  .home-container25 {
    width: auto;
  }
  .home-card3 {
    padding: 24px;
  }
  .home-container26 {
    width: auto;
  }
  .home-card4 {
    width: auto;
    padding: 24px;
  }
  .home-container27 {
    width: auto;
  }
  .home-card5 {
    padding: 24px;
  }
}
</style>
