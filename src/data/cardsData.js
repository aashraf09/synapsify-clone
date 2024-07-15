import gpuInstanceImg from '../assets/gpu-instance.webp'
import gpuClusterImg from '../assets/clusters.webp'
import serverlessInference from '../assets/serverless-instance.webp'

const cardsData = [
    {
        image: gpuInstanceImg,
        heading: 'GPU Instances',
        description: 'On-demand and long-term instances on DataCrunch infrastructure',
        buttonText: 'View More',
        buttonHref: '/'
    },
    {
        image: gpuClusterImg,
        heading: 'GPU Clusters',
        description: 'Custom built GPU clusters, managed by DataCrunch with custom software stack',
        buttonText: 'View More',
        buttonHref: '/'
    },
    {
        image: serverlessInference,
        heading: 'Serverless Inference',
        description: 'Autoscaling and low-cost deployment for your models with zero setup',
        buttonText: 'View More',
        buttonHref: '/'
    },

]

export default cardsData