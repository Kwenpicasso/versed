import React from 'react'
import {
  Card,
  CardContent,
 
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
const Tab = () => {
  return (
    <Tabs defaultValue="how to use" className="w-full">
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="how to use"><h1 className='uppercase text-black text-xs sm:text-[10px]'>how to use</h1></TabsTrigger>
      <TabsTrigger value="ingredients"><h1 className='uppercase text-black text-xs sm:text-[10px]'>ingredients</h1></TabsTrigger>
      <TabsTrigger value="delivery and payment"><h1 className='uppercase text-black text-xs sm:text-[10px]'>delivery</h1></TabsTrigger>
    </TabsList>
    <TabsContent value="how to use">
      <Card >
        <CardContent className="">
      <p className='text-xs text-center'>
      Gently tap a teeny-tiny dot around eyes.Above and under eyes (temples, too).AM and/or PM, 
        after cleanser and serum but before moisturizer.
       Wait about a minute for the eye gel to fully absorb, leaving behind a smoothing, 
       tightened base, before applying makeup or other skincare products.Use within 6 months once opened.
      </p>
        </CardContent>
        
      </Card>
    </TabsContent>
    <TabsContent value="ingredients">
      <Card>
      
        <CardContent className="space-y-2">
     <p className='text-xs text-black text-center'>   Water, Butylene Glycol, Dipropylene Glycol, Glycerin, Panax Ginseng Root Extract, Coffea Arabica
         (Coffee) Seed Extract, Sodium Ascorbyl Phosphate, Niacinamide, Citric Acid, Tocopheryl Acetate,
          Polysorbate 20, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Phenoxyethanol, Sodium Hydroxide,
           Ammonium Acryloyldimethyltaurate/VP Copolymer, Propylene Glycol, 1,2-Hexanediol, Trisodium
            Ethylenediamine Disuccinate, Potassium Sorbate, Sodium Benzoate</p>
        </CardContent>
        
      </Card>
    </TabsContent>
    <TabsContent value="delivery and payment">
      <Card>
      
        <CardContent className="space-y-2">
       <p className='text-xs text-black text-center'> We are a climate-first brand focused on reducing our footprint. Our partner in emissions
         tracking, Bluebird Climate, calculates each product’s footprint using Greenhouse Gas
          Protocol, which considers emissions from materials, ingredients, manufacturing, 
          transportation, and distribution. A product’s waste footprint is calculated 
          by examining its recyclability and degradability.</p>
        </CardContent>
        
      </Card>
    </TabsContent>
  </Tabs>
  )
}

export default Tab
