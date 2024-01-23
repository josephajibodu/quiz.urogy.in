import Lottie from "lottie-react"
import spinnerAnimation from  "@/assets/animations/spinner-2.json"

function Loader() {
    return <>
    <section className="flex flex-col justify-center w-full px-4 lg:px-16 pt-12 text-brand h-full min-h-screen">
      {/* <h2 className="text-3xl font-bold text-center mb-10">Thank You for Completing the Questionnaire!</h2>
      <p className="text-3xl text-center leading-relaxed">Your personalized playlist is being created based on your responses. Sit tight as we curate content just for you.</p> */}

      <div className="flex justify-center mt-10">
        <Lottie className="w-48" animationData={spinnerAnimation as unknown} loop />
      </div>
    </section>
  </>
}

export default Loader