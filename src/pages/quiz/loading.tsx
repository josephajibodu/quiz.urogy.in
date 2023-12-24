import Lottie from "lottie-react"
import spinnerAnimation from  "@/assets/animations/spinner-2.json"

function Loader() {
    return <>
    <section className="flex flex-col items-center justify-center w-full px-4 lg:px-16 text-brand h-full min-h-screen">
      <h2 className="text-base lg:text-3xl font-bold text-center mb-10">Thank You for Completing the Questionnaire!</h2>
      <p className="text-2xl lg:text-3xl text-center leading-relaxed">Please wait while we analyse your responses.</p>

      <div className="flex justify-center mt-10">
        <Lottie className="w-48" animationData={spinnerAnimation as unknown} loop />
      </div>
    </section>
  </>
}

export default Loader