import React from 'react'
import { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp'
import Step2Interview from '../components/Step2Interview'
import Step3Report from '../components/Step3Report'

function InterviewPage() {
   const [step,setStep] = useState(1)
const [interviewData,setInterviewData] = useState(null)
const [aiGender, setAiGender] = useState("male")
const [result, setResult] = useState(null)
  return (
    <div className='min-h-screen bg-gray-50'>
        {step===1 && (
           <Step1SetUp
  aiGender={aiGender}
  setAiGender={setAiGender}
  onStart={(data) => {
    setInterviewData(data);
    setStep(2);
  }}
/>
        )}

         {step===2 && (
           <Step2Interview
  interviewData={interviewData}
  aiGender={aiGender}
  onFinish={(data) => {
    setResult(data);
    setStep(3);
  }}
/>
        )}

          {step===3 && (
            <Step3Report report={result}/>
        )}

      
    </div>
  )
}

export default InterviewPage
