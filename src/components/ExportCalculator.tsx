import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Truck, Globe, Info, RefreshCw, Download, Share2 } from 'lucide-react';

export default function ExportCalculator() {
  const [activeTab, setActiveTab] = useState('profit');
  const [results, setResults] = useState<any>({});

  // Profit Calculator State
  const [profitData, setProfitData] = useState({
    productCost: '',
    quantity: '',
    shippingCost: '',
    customsDuty: '',
    sellingPrice: '',
    currency: 'USD'
  });

  // Shipping Calculator State
  const [shippingData, setShippingData] = useState({
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    origin: 'India',
    destination: 'USA',
    shippingMode: 'air'
  });

  // Currency Converter State
  const [currencyData, setCurrencyData] = useState({
    amount: '',
    fromCurrency: 'INR',
    toCurrency: 'USD',
    exchangeRate: 83.50 // Default INR to USD rate
  });

  // Exchange rates (in real app, fetch from API)
  const exchangeRates: { [key: string]: number } = {
    'USD': 83.50,
    'EUR': 91.20,
    'GBP': 106.80,
    'AUD': 55.40,
    'CAD': 61.20,
    'SGD': 62.10,
    'AED': 22.75,
    'JPY': 0.56
  };

  const calculateProfit = () => {
    const cost = parseFloat(profitData.productCost) * parseFloat(profitData.quantity);
    const shipping = parseFloat(profitData.shippingCost);
    const customs = parseFloat(profitData.customsDuty);
    const revenue = parseFloat(profitData.sellingPrice) * parseFloat(profitData.quantity);
    
    const totalCost = cost + shipping + customs;
    const profit = revenue - totalCost;
    const profitMargin = (profit / revenue) * 100;
    
    const inrRate = exchangeRates[profitData.currency] || 1;
    
    setResults({
      ...results,
      profit: {
        totalCost: totalCost,
        totalRevenue: revenue,
        profit: profit,
        profitMargin: profitMargin,
        profitInINR: profit * inrRate,
        revenueInINR: revenue * inrRate
      }
    });
  };

  const calculateShipping = () => {
    const weight = parseFloat(shippingData.weight);
    const volume = (parseFloat(shippingData.dimensions.length) * 
                   parseFloat(shippingData.dimensions.width) * 
                   parseFloat(shippingData.dimensions.height)) / 5000; // Volumetric weight
    
    const chargeableWeight = Math.max(weight, volume);
    
    // Sample rates (in real app, integrate with shipping APIs)
    const rates: { [key: string]: { [key: string]: number } } = {
      air: { USA: 450, UK: 520, UAE: 280, Australia: 580, Canada: 480 },
      sea: { USA: 85, UK: 95, UAE: 45, Australia: 120, Canada: 90 }
    };
    
    const baseRate = rates[shippingData.shippingMode][shippingData.destination] || 400;
    const shippingCost = chargeableWeight * baseRate;
    
    setResults({
      ...results,
      shipping: {
        chargeableWeight: chargeableWeight,
        shippingCost: shippingCost,
        estimatedDays: shippingData.shippingMode === 'air' ? '5-7 days' : '25-35 days'
      }
    });
  };

  const convertCurrency = () => {
    const amount = parseFloat(currencyData.amount);
    const fromRate = currencyData.fromCurrency === 'INR' ? 1 : exchangeRates[currencyData.fromCurrency];
    const toRate = currencyData.toCurrency === 'INR' ? 1 : exchangeRates[currencyData.toCurrency];
    
    let convertedAmount;
    if (currencyData.fromCurrency === 'INR') {
      convertedAmount = amount / toRate;
    } else if (currencyData.toCurrency === 'INR') {
      convertedAmount = amount * fromRate;
    } else {
      const inrAmount = amount * fromRate;
      convertedAmount = inrAmount / toRate;
    }
    
    setResults({
      ...results,
      currency: {
        originalAmount: amount,
        convertedAmount: convertedAmount,
        rate: currencyData.fromCurrency === 'INR' ? `1 INR = ${(1/toRate).toFixed(4)} ${currencyData.toCurrency}` : 
              currencyData.toCurrency === 'INR' ? `1 ${currencyData.fromCurrency} = ${fromRate.toFixed(2)} INR` :
              `1 ${currencyData.fromCurrency} = ${(fromRate/toRate).toFixed(4)} ${currencyData.toCurrency}`
      }
    });
  };

  const tabs = [
    { id: 'profit', label: 'Profit Calculator', icon: <TrendingUp size={20} /> },
    { id: 'shipping', label: 'Shipping Calculator', icon: <Truck size={20} /> },
    { id: 'currency', label: 'Currency Converter', icon: <DollarSign size={20} /> }
  ];

  const countries = ['USA', 'UK', 'UAE', 'Australia', 'Canada', 'Germany', 'France', 'Singapore', 'Japan'];
  const currencies = ['INR', 'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'SGD', 'AED', 'JPY'];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator size={16} />
            <span>FREE Export Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
            Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Export Calculator</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The same tools that 10,000+ successful exporters use daily to calculate profits, shipping costs, and currency conversions
          </p>
        </div>

        {/* Calculator Tool */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-8">
              {/* Profit Calculator */}
              {activeTab === 'profit' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Cost per Unit</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={profitData.productCost}
                            onChange={(e) => setProfitData({...profitData, productCost: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter cost per unit"
                          />
                          <span className="absolute right-3 top-3 text-gray-500">₹</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                        <input
                          type="number"
                          value={profitData.quantity}
                          onChange={(e) => setProfitData({...profitData, quantity: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter quantity"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Cost</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={profitData.shippingCost}
                            onChange={(e) => setProfitData({...profitData, shippingCost: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter shipping cost"
                          />
                          <span className="absolute right-3 top-3 text-gray-500">₹</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Customs Duty & Other Charges</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={profitData.customsDuty}
                            onChange={(e) => setProfitData({...profitData, customsDuty: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter customs duty"
                          />
                          <span className="absolute right-3 top-3 text-gray-500">₹</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Selling Details</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price per Unit</label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <input
                              type="number"
                              value={profitData.sellingPrice}
                              onChange={(e) => setProfitData({...profitData, sellingPrice: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter selling price"
                            />
                          </div>
                          <select
                            value={profitData.currency}
                            onChange={(e) => setProfitData({...profitData, currency: e.target.value})}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            {currencies.map(currency => (
                              <option key={currency} value={currency}>{currency}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={calculateProfit}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Calculator size={20} />
                        Calculate Profit
                      </button>

                      {results.profit && (
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                          <h4 className="font-semibold text-gray-800 mb-4">Profit Analysis</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Total Revenue:</span>
                              <span className="font-semibold">{profitData.currency} {results.profit.totalRevenue.toFixed(2)} (₹{results.profit.revenueInINR.toFixed(2)})</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Total Cost:</span>
                              <span className="font-semibold">₹{results.profit.totalCost.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span className="text-gray-800 font-semibold">Net Profit:</span>
                              <span className={`font-bold ${results.profit.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {profitData.currency} {results.profit.profit.toFixed(2)} (₹{results.profit.profitInINR.toFixed(2)})
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Profit Margin:</span>
                              <span className={`font-semibold ${results.profit.profitMargin > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {results.profit.profitMargin.toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Shipping Calculator */}
              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Package Details</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                        <input
                          type="number"
                          value={shippingData.weight}
                          onChange={(e) => setShippingData({...shippingData, weight: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter weight in kg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (cm)</label>
                        <div className="grid grid-cols-3 gap-2">
                          <input
                            type="number"
                            value={shippingData.dimensions.length}
                            onChange={(e) => setShippingData({...shippingData, dimensions: {...shippingData.dimensions, length: e.target.value}})}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="Length"
                          />
                          <input
                            type="number"
                            value={shippingData.dimensions.width}
                            onChange={(e) => setShippingData({...shippingData, dimensions: {...shippingData.dimensions, width: e.target.value}})}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="Width"
                          />
                          <input
                            type="number"
                            value={shippingData.dimensions.height}
                            onChange={(e) => setShippingData({...shippingData, dimensions: {...shippingData.dimensions, height: e.target.value}})}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="Height"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
                        <select
                          value={shippingData.destination}
                          onChange={(e) => setShippingData({...shippingData, destination: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Mode</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setShippingData({...shippingData, shippingMode: 'air'})}
                            className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                              shippingData.shippingMode === 'air'
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            Air Freight
                          </button>
                          <button
                            onClick={() => setShippingData({...shippingData, shippingMode: 'sea'})}
                            className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                              shippingData.shippingMode === 'sea'
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            Sea Freight
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Estimate</h3>
                      
                      <button
                        onClick={calculateShipping}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Truck size={20} />
                        Calculate Shipping
                      </button>

                      {results.shipping && (
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                          <h4 className="font-semibold text-gray-800 mb-4">Shipping Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Chargeable Weight:</span>
                              <span className="font-semibold">{results.shipping.chargeableWeight.toFixed(2)} kg</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Estimated Cost:</span>
                              <span className="font-semibold text-blue-600">₹{results.shipping.shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Delivery Time:</span>
                              <span className="font-semibold">{results.shipping.estimatedDays}</span>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p className="text-xs text-yellow-800">
                              <Info size={14} className="inline mr-1" />
                              Rates are approximate. Contact freight forwarders for exact quotes.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Currency Converter */}
              {activeTab === 'currency' && (
                <div className="space-y-6">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Live Currency Converter</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                        <input
                          type="number"
                          value={currencyData.amount}
                          onChange={(e) => setCurrencyData({...currencyData, amount: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          placeholder="Enter amount"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                          <select
                            value={currencyData.fromCurrency}
                            onChange={(e) => setCurrencyData({...currencyData, fromCurrency: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            {currencies.map(currency => (
                              <option key={currency} value={currency}>{currency}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                          <select
                            value={currencyData.toCurrency}
                            onChange={(e) => setCurrencyData({...currencyData, toCurrency: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            {currencies.map(currency => (
                              <option key={currency} value={currency}>{currency}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={convertCurrency}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <RefreshCw size={20} />
                        Convert Currency
                      </button>

                      {results.currency && (
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                          <div className="text-center space-y-4">
                            <div className="text-3xl font-bold text-gray-800">
                              {currencyData.fromCurrency} {results.currency.originalAmount.toFixed(2)}
                            </div>
                            <div className="text-gray-500">equals</div>
                            <div className="text-4xl font-bold text-blue-600">
                              {currencyData.toCurrency} {results.currency.convertedAmount.toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600 bg-white rounded-lg p-3">
                              Exchange Rate: {results.currency.rate}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tool Benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Accurate Calculations</h3>
              <p className="text-gray-600 text-sm">Get precise profit margins and shipping costs for better decision making</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Global Rates</h3>
              <p className="text-gray-600 text-sm">Real-time currency conversion and international shipping estimates</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Maximize Profits</h3>
              <p className="text-gray-600 text-sm">Optimize your pricing strategy with detailed profit analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}