const Models = [
    {
        modelName: 'H100  SXM5 80GB',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '30',
                RAM: '120GB',
                GPU_RAM: '80GB',
                prices: {
                    'On Demand': '$3.17/h',
                    '3 Months': '$3.07/h',
                    '6 Months': '$3.04/h',
                    '1 Year': '$2.92/h',
                    '2 Year': '$2.38/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '60',
                RAM: '240GB',
                GPU_RAM: '160GB',
                prices: {
                    'On Demand': '$6.34/h',
                    '3 Months': '$6.15/h',
                    '6 Months': '$6.09/h',
                    '1 Year': '$5.83/h',
                    '2 Year': '$4.75/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '88',
                RAM: '740 GB',
                GPU_RAM: '320 GB',
                prices: {
                    'On Demand': '$12.68/h',
                    '3 Months': '$12.30/h',
                    '6 Months': '$12.17/h',
                    '1 Year': '$11.67/h',
                    '2 Year': '$9.51/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '120',
                RAM: '480 GB',
                GPU_RAM: '320 GB',
                prices: {
                    'On Demand': '$12.68/h',
                    '3 Months': '$12.30/h',
                    '6 Months': '$12.17/h',
                    '1 Year': '$11.67/h',
                    '2 Year': '$9.51/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '176',
                RAM: '1480 GB',
                GPU_RAM: '640 GB',
                prices: {
                    'On Demand': '$25.36/h',
                    '3 Months': '$24.60/h',
                    '6 Months': '$24.35/h',
                    '1 Year': '$23.33/h',
                    '2 Year': '$19.02/h'
                }
            },
        ],
        bestFor: ['Giant ML models', 'Multi-GPU training', 'FP64 HPC', 'NVLINK']
    },
    {
        modelName: 'A100 SXM4 80GB',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '22',
                RAM: '120 GB',
                GPU_RAM: '80 GB',
                prices: {
                    'On Demand': '$1.75/h',
                    '3 Months': '$1.70/h',
                    '6 Months': '$1.68/h',
                    '1 Year': '$1.61/h',
                    '2 Year': '$1.31/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '44',
                RAM: '240 GB',
                GPU_RAM: '160 GB',
                prices: {
                    'On Demand': '$3.50/h',
                    '3 Months': '$3.40/h',
                    '6 Months': '$3.36/h',
                    '1 Year': '$3.22/h',
                    '2 Year': '$2.63/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '88',
                RAM: '480 GB',
                GPU_RAM: '320 GB',
                prices: {
                    'On Demand': '$7.00/h',
                    '3 Months': '$6.79/h',
                    '6 Months': '$6.72/h',
                    '1 Year': '$6.44/h',
                    '2 Year': '$5.25/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '176',
                RAM: '960 GB',
                GPU_RAM: '640 GB',
                prices: {
                    'On Demand': '$14.00/h',
                    '3 Months': '$13.58/h',
                    '6 Months': '$13.44/h',
                    '1 Year': '$12.88/h',
                    '2 Year': '$10.50/h'
                }
            },
        ],
        bestFor: ['Giant ML models', 'Multi-GPU training', 'FP64 calculations', 'NVLINK']
    },
    {
        modelName: 'A100 SXm4 40GB',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '22',
                RAM: '120 GB',
                GPU_RAM: '40 GB',
                prices: {
                    'On Demand': '$1.29/h',
                    '3 Months': '$1.25/h',
                    '6 Months': '$1.24/h',
                    '1 Year': '$1.19/h',
                    '2 Year': '$0.97/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '44',
                RAM: '240 GB',
                GPU_RAM: '80 GB',
                prices: {
                    'On Demand': '$2.58/h',
                    '3 Months': '$2.50/h',
                    '6 Months': '$2.48/h',
                    '1 Year': '$2.37/h',
                    '2 Year': '$1.94/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '88',
                RAM: '480 GB',
                GPU_RAM: '160 GB',
                prices: {
                    'On Demand': '$5.16/h',
                    '3 Months': '$5.01/h',
                    '6 Months': '$4.95/h',
                    '1 Year': '$4.75/h',
                    '2 Year': '$3.87/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '176',
                RAM: '960 GB',
                GPU_RAM: '320 GB',
                prices: {
                    'On Demand': '$10.32/h',
                    '3 Months': '$10.01/h',
                    '6 Months': '$9.91/h',
                    '1 Year': '$9.49/h',
                    '2 Year': '$7.74/h'
                }
            },
        ],
        bestFor: ['Giant ML models', 'Multi-GPU training', 'FP64 calculations', 'NVLINK']
    },
    {
        modelName: 'Nvidia L40S',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '20',
                RAM: '60 GB',
                GPU_RAM: '48 GB',
                prices: {
                    'On Demand': '$1.36/h',
                    '3 Months': '$1.32/h',
                    '6 Months': '$1.31/h',
                    '1 Year': '$1.25/h',
                    '2 Year': '$1.02/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '40',
                RAM: '120 GB',
                GPU_RAM: '96 GB',
                prices: {
                    'On Demand': '$2.72/h',
                    '3 Months': '$2.64/h',
                    '6 Months': '$2.61/h',
                    '1 Year': '$2.50/h',
                    '2 Year': '$2.04/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '80',
                RAM: '240 GB',
                GPU_RAM: '192 GB',
                prices: {
                    'On Demand': '$5.43/h',
                    '3 Months': '$5.27/h',
                    '6 Months': '$5.21/h',
                    '1 Year': '$5.00/h',
                    '2 Year': '$4.07/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '160',
                RAM: '480 GB',
                GPU_RAM: '384 GB',
                prices: {
                    'On Demand': '$10.86/h',
                    '3 Months': '$10.53/h',
                    '6 Months': '$10.43/h',
                    '1 Year': '$9.99/h',
                    '2 Year': '$8.14/h'
                }
            },
        ],
        bestFor: ['Large ML models', '32-16-8 bit operations', 'Single-GPU training']
    },
    {
        modelName: 'Nvidia RTX6000 Ada 48GB',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '10',
                RAM: '60 GB',
                GPU_RAM: '48 GB',
                prices: {
                    'On Demand': '$1.19/h',
                    '3 Months': '$1.15/h',
                    '6 Months': '$1.14/h',
                    '1 Year': '$1.09/h',
                    '2 Year': '$0.89/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '20',
                RAM: '120 GB',
                GPU_RAM: '96 GB',
                prices: {
                    'On Demand': '$2.38/h',
                    '3 Months': '$2.31/h',
                    '6 Months': '$2.28/h',
                    '1 Year': '$2.19/h',
                    '2 Year': '$1.78/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '40',
                RAM: '240 GB',
                GPU_RAM: '192 GB',
                prices: {
                    'On Demand': '$4.76/h',
                    '3 Months': '$4.62/h',
                    '6 Months': '$4.57/h',
                    '1 Year': '$4.38/h',
                    '2 Year': '$3.57/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '80',
                RAM: '480 GB',
                GPU_RAM: '384 GB',
                prices: {
                    'On Demand': '$9.52/h',
                    '3 Months': '$9.23/h',
                    '6 Months': '$9.14/h',
                    '1 Year': '$8.76/h',
                    '2 Year': '$7.14/h'
                }
            },
        ],
        bestFor: ['Large ML models', '32-16-8 bit operations', 'Single-GPU training']
    },
    {
        modelName: 'Nvidia RTX A6000 48GB',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '10',
                RAM: '60 GB',
                GPU_RAM: '48 GB',
                prices: {
                    'On Demand': '$1.01/h',
                    '3 Months': '$0.98/h',
                    '6 Months': '$0.97/h',
                    '1 Year': '$0.93/h',
                    '2 Year': '$0.76/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '20',
                RAM: '120 GB',
                GPU_RAM: '96 GB',
                prices: {
                    'On Demand': '$2.01/h',
                    '3 Months': '$1.95/h',
                    '6 Months': '$1.93/h',
                    '1 Year': '$1.85/h',
                    '2 Year': '$1.51/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '40',
                RAM: '240 GB',
                GPU_RAM: '192 GB',
                prices: {
                    'On Demand': '$4.03/h',
                    '3 Months': '$3.91/h',
                    '6 Months': '$3.87/h',
                    '1 Year': '$3.71/h',
                    '2 Year': '$3.02/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '80',
                RAM: '480 GB',
                GPU_RAM: '384 GB',
                prices: {
                    'On Demand': '$8.06/h',
                    '3 Months': '$7.82/h',
                    '6 Months': '$7.74/h',
                    '1 Year': '$7.42/h',
                    '2 Year': '$6.04/h'
                }
            },
        ],
        bestFor: ['Large ML models', 'FP32 calculations', 'Single-GPU training']
    },
    {
        modelName: 'Nvidia Tesla V100 16GB',
        modelSpecifications: [
            {
                numberOfGPUs: 1,
                CPUs: '6',
                RAM: '23 GB',
                GPU_RAM: '16 GB',
                prices: {
                    'On Demand': '$0.39/h',
                    '3 Months': '$0.38/h',
                    '6 Months': '$0.37/h',
                    '1 Year': '$0.36/h',
                    '2 Year': '$0.29/h'
                }
            },
            {
                numberOfGPUs: 2,
                CPUs: '10',
                RAM: '45 GB',
                GPU_RAM: '32 GB',
                prices: {
                    'On Demand': '$0.78/h',
                    '3 Months': '$0.76/h',
                    '6 Months': '$0.75/h',
                    '1 Year': '$0.72/h',
                    '2 Year': '$0.58/h'
                }
            },
            {
                numberOfGPUs: 4,
                CPUs: '20',
                RAM: '90 GB',
                GPU_RAM: '64 GB',
                prices: {
                    'On Demand': '$1.56/h',
                    '3 Months': '$1.51/h',
                    '6 Months': '$1.50/h',
                    '1 Year': '$1.44/h',
                    '2 Year': '$1.17/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '48',
                RAM: '180 GB',
                GPU_RAM: '128 GB',
                prices: {
                    'On Demand': '$3.12/h',
                    '3 Months': '$3.03/h',
                    '6 Months': '$3.00/h',
                    '1 Year': '$2.87/h',
                    '2 Year': '$2.34/h'
                }
            },
        ],
        bestFor: ['Small ML models', 'Multi-GPU training', 'FP64 calculations', 'NVLINK']
    },
    {
        modelName: 'CPU Node',
        modelSpecifications: [
            {
                numberOfGPUs: 4,
                CPUs: '4',
                RAM: '16 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$0.09/h',
                    '3 Months': '$0.09/h',
                    '6 Months': '$0.09/h',
                    '1 Year': '$0.08/h',
                    '2 Year': '$0.07/h'
                }
            },
            {
                numberOfGPUs: 8,
                CPUs: '8',
                RAM: '32 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$0.18/h',
                    '3 Months': '$0.17/h',
                    '6 Months': '$0.17/h',
                    '1 Year': '$0.17/h',
                    '2 Year': '$0.14/h'
                }
            },
            {
                numberOfGPUs: 16,
                CPUs: '16',
                RAM: '64 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$0.36/h',
                    '3 Months': '$0.35/h',
                    '6 Months': '$0.35/h',
                    '1 Year': '$0.33/h',
                    '2 Year': '$0.27/h'
                }
            },
            {
                numberOfGPUs: 32,
                CPUs: '32',
                RAM: '128 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$0.72/h',
                    '3 Months': '$0.70/h',
                    '6 Months': '$0.69/h',
                    '1 Year': '$0.66/h',
                    '2 Year': '$0.54/h'
                }
            },
            {
                numberOfGPUs: 64,
                CPUs: '64',
                RAM: '256 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$1.44/h',
                    '3 Months': '$1.40/h',
                    '6 Months': '$1.38/h',
                    '1 Year': '$1.32/h',
                    '2 Year': '$1.08/h'
                }
            },
            {
                numberOfGPUs: 96,
                CPUs: '96',
                RAM: '384 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$2.16/h',
                    '3 Months': '$2.10/h',
                    '6 Months': '$2.07/h',
                    '1 Year': '$1.99/h',
                    '2 Year': '$1.62/h'
                }
            },
            {
                numberOfGPUs: 120,
                CPUs: '120',
                RAM: '480 GB',
                GPU_RAM: '- GB',
                prices: {
                    'On Demand': '$2.70/h',
                    '3 Months': '$2.62/h',
                    '6 Months': '$2.59/h',
                    '1 Year': '$2.48/h',
                    '2 Year': '$2.03/h'
                }
            },
        ],
        bestFor: ['Running Services', 'API Server', 'Data Transer']
    },

]

export default Models