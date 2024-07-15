import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Models from '../data/ModelsPrices'

const PriceCalculator = () => {
    const [selectedModel, setSelectedModel] = useState(Models[0].modelName)
    const [selectedNumberOfGPUs, setSelectedNumberOfGPUs] = useState(Models[0].modelSpecifications[0].numberOfGPUs)
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0)
    const planDurations = ['On Demand', '3 Months', '6 Months', '1 Year', '2 Year']

    const handleModelChange = (e) => {
        const modelName = e.target.value
        setSelectedModel(modelName)
        const model = Models.find(model => model.modelName === modelName)
        setSelectedNumberOfGPUs(model.modelSpecifications[0].numberOfGPUs)
        setSelectedPlanIndex(0)
    }

    // Updates the values based on the selected number of GPUs
    const handleNumberOfGPUsChange = (e) => {
        setSelectedNumberOfGPUs(parseInt(e.target.value))
        setSelectedPlanIndex(0)
    }

    // Shows the price of previous plans... etc if the user was on "6 Months Plan" and clicks this button then the "3 Months plan" will be shown and so on...
    const handlePreviousPrice = () => {
        setSelectedPlanIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : planDurations.length - 1))
    }

    // Shows the price of next plans... etc if the user was on "6 Months Plan" and clicks this button then the "1 year plan" will be shown and so on...
    const handleNextPrice = () => {
        setSelectedPlanIndex(prevIndex => (prevIndex < planDurations.length - 1 ? prevIndex + 1 : 0))
    }

    const selectedModelData = Models.find(model => model.modelName === selectedModel)
    const selectedSpec = selectedModelData.modelSpecifications.find(spec => spec.numberOfGPUs === selectedNumberOfGPUs)
    const selectedPrice = selectedSpec.prices[planDurations[selectedPlanIndex]]

    return (
        <div className="flex flex-col items-start justify-between gap-5 p-10 rounded-lg w-full" style={{ backgroundColor: 'var(--light-green-bg)' }}>
            <h5 className='text-center w-full'>Price Calculator</h5>
            {/* Main div, showing the selection array and the number of GPUs selected side-by-side */}
            <div className="flex flex-col md:flex-row items-start w-full justify-between gap-5 border-b border-b-slate-300 pb-8">
                {/* Model Selection and GPUs selection Div */}
                <div className="flex flex-col items-start justify-between gap-4 w-full">
                    <div className="flex flex-col items-start justify-between gap-1 w-full">
                        <label htmlFor="gpu" className='n1-note'>GPU Model</label>
                        <select name="gpu" id="gpu" className="bg-white border border-black w-full rounded-lg px-4 py-2 outline-none n1-note" onChange={handleModelChange}>
                            {
                                Models.map((model, index) => (
                                    <option key={index} className='n1-note font-normal' value={model.modelName}>{model.modelName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2">
                        <label htmlFor="number_of_gpus" className='n1-note'>Number of GPUs</label>
                        <div className="flex flex-row items-start justify-between gap-1 w-full">
                            {
                                selectedModelData.modelSpecifications.map((spec, index) => (
                                    <label key={index} className={`flex flex-row items-center justify-between gap-2 cursor-pointer rounded-lg px-3 bg-white py-1 ${selectedNumberOfGPUs === spec.numberOfGPUs ? 'border border-black text-black' : 'secondary-text'}`}>
                                        <p>{spec.numberOfGPUs}</p>
                                        <input type="radio" name="number_of_gpus" id={`gpu_${spec.numberOfGPUs}`} value={spec.numberOfGPUs} checked={selectedNumberOfGPUs === spec.numberOfGPUs} onChange={handleNumberOfGPUsChange} className="hidden" />
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Preview of all the specifications that the user has selected */}
                <div className="w-full flex flex-col items-start justify-between gap-1 bg-white p-5 rounded-lg">
                    <p className="n1-note">{selectedNumberOfGPUs}x {selectedModel}</p>
                    <p className='n2-note secondary-text'>{selectedSpec.CPUs} CPUs</p>
                    <p className='n2-note secondary-text'>{selectedSpec.RAM} RAM</p>
                    <p className='n2-note secondary-text'>{selectedSpec.GPU_RAM} GPU RAM</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-1">
                <p className="n1-note secondary-text">This setup is best for:</p>
                <div className="flex flex-row items-center justify-start gap-3 flex-wrap md:flex-nowrap">
                    {
                        Models.find(model => model.modelName === selectedModel).bestFor.map((bestFor, index) => (
                            <div key={index} className="flex flex-row items-center justify-between gap-1 bg-transparent border border-[#818181] secondary-text p-2 rounded-lg">
                                <p className="n2-note">{bestFor}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* H2 tag for showing the price of the selected model and number of GPUs and action buttons for viewing the prices of different plans */}
            <div className="flex flex-col items-center justify-center w-full py-5 gap-3">
                <h2 className='text-center w-full text-[#245866]'>{selectedPrice}</h2>
                <div className="flex flex-row items-center justify-between gap-2 secondary-text">
                    <button onClick={handlePreviousPrice}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="min-w-[200px] flex flex-col items-center justify-between gap-1">
                        <p className='btn cursor-auto'>{planDurations[selectedPlanIndex]} Price</p>
                        <div className="flex flex-row items-center justify-center gap-2">
                            {
                                planDurations.map((_, index) => (
                                    <div key={index} className={`w-2 h-2 rounded-full ${index === selectedPlanIndex ? 'bg-black' : 'bg-gray-400'}`}></div>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={handleNextPrice}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PriceCalculator
