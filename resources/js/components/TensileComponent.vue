<template>
    <section class="container flex items-center justify-center p-16">

        <div class="w-full">

            <form action="/test?test=tensiletest" method="post" class="bg-teal-900 w-full p-10">
                <!-- Length -->
                <div class="flex-sm">

                    <div class="form-group col-6_sm px-5">
                        <label for="original_length" class="text-md font-semibold block mb-5 text-white font-sans tracking-wide">Original Length</label>
                        <input type="number" name="original_length" id="" class="form-input w-full" step="0.000001" placeholder="" required>
                    </div>

                    <div class="form-group col-6_sm px-5">
                        <label for="final_length" class="text-md font-semibold block mb-5 text-white font-sans tracking-wide">Final Length</label>
                        <input type="number" name="final_length" id="" class="form-input w-full" step="0.000001" placeholder="" required>
                    </div>

                </div>
                <!-- Daimeter -->
                <div class="flex-sm">

                    <div class="form-group col-6_sm p-5">
                        <label for="original_diameter" class="text-md font-semibold block mb-5 text-white font-sans tracking-wide">Original Daimeter</label>
                        <input type="number" name="original_diameter" id="" class="form-input w-full" step="0.000001" placeholder="" required>
                    </div>

                    <div class="form-group col-6_sm p-5">
                        <label for="final_diameter" class="text-md font-semibold block mb-5 text-white font-sans tracking-wide">Final Daimeter</label>
                        <input type="number" name="final_diameter" id="" class="form-input w-full" step="0.000001" placeholder="" required>
                    </div>

                </div>
                <!-- Load -->
                <div class="form-group px-5">
                    <label for="applied_load" class="text-md font-semibold block mb-5 text-white font-sans tracking-wide">Applied Load</label>
                    <textarea name="applied_load" id="" cols="30" rows="5" class="form-textarea w-full" placeholder="Input Load values seperated by comma's" required></textarea>
                </div>
                
                <!-- Extensions -->
                <div class="form-group px-5">
                    <label for="extension" class="text-md font-semibold block mb-5 mt-5 text-white font-sans tracking-wide">Extension</label>
                    <textarea name="extension" id="" cols="30" rows="5" class="form-textarea w-full" placeholder="Input Extensions Values seperated by comma's" required></textarea>
                </div>
                <!-- Load SI unit -->
                <div class="form-group px-5">
                    <!-- Header -->
                    <span class="text-md font-semibold block mb-5 text-white font-sans tracking-wide mt-5">Load SI unit</span>

                    <label for="load_si_unit" class="text-sm text-white font-sans tracking-wide">Newtons</label>
                    <input type="radio" name="load_si_unit" id="" class="form-radio" value="newtons" checked>

                    <label for="load_si_unit" class="text-sm text-white font-sans tracking-wide">Kilonewtons</label>
                    <input type="radio" name="load_si_unit" id="" class="form-radio" value="kilonewtons">

                    <label for="load_si_unit" class="text-sm text-white font-sans tracking-wide">Meganewtons</label>
                    <input type="radio" name="load_si_unit" id="" class="form-radio" value="meganewtons">
                </div>
                <!-- Extensions SI unit -->
                <div class="form-group px-5">
                    <!-- Header -->
                    <span class="text-md font-semibold block mb-5 text-white font-sans tracking-wide mt-5">Extension SI unit</span>

                    <label for="extension_si_unit" class="text-sm text-white font-sans tracking-wide">Meters</label>
                    <input type="radio" name="extension_si_unit" id="" class="form-radio" value="meters" checked>

                    <label for="extension_si_unit" class="text-sm text-white font-sans tracking-wide">Centimetres</label>
                    <input type="radio" name="extension_si_unit" id="" class="form-radio" value="centimetres">

                    <label for="extension_si_unit" class="text-sm text-white font-sans tracking-wide">Millimetres</label>
                    <input type="radio" name="extension_si_unit" id=" " class="form-radio" value="millimetres">
                </div>
                <!-- Dimensions -->
                <div class="form-group px-5">
                    <!-- Header -->
                    <span class="text-md font-semibold block mb-5 text-white font-sans tracking-wide mt-5">Daimeter and Length SI unit</span>

                    <label for="dimensions_si_unit" class="text-sm text-white font-sans tracking-wide">Meters</label>
                    <input type="radio" name="dimensions_si_unit" id="" class="form-radio" value="meters" checked>

                    <label for="dimensions_si_unit" class="text-sm text-white font-sans tracking-wide">Centimetres</label>
                    <input type="radio" name="dimensions_si_unit" id="" class="form-radio" value="centimetres">

                    <label for="dimensions_si_unit" class="text-sm text-white font-sans tracking-wide">Millimetres</label>
                    <input type="radio" name="dimensions_si_unit" id="" class="form-radio" value="millimetres">
                </div>
                <!-- Properties Needed to be calculated -->
                <span class="text-md font-semibold block mb-5 text-white font-sans tracking-wide mt-5">Properties Needed to be Calculated</span>
                <div class="form-group px-5 flex">
                    <!-- Header -->
                    <div class="pr-3">
                        <label for="percantage_elongation" class="text-sm text-white font-sans tracking-wide">Percantage Elongation</label>
                        <input type="checkbox" name="percantage_elongation" id="" class="form-checkbox" value="percantage_elongation">
                    </div>
                    <div class="px-3">
                        <label for="percantage_area_reductions" class="text-sm text-white font-sans tracking-wide">Percantage Area Reductions</label>
                        <input type="checkbox" name="percantage_area_reductions" id="" class="form-checkbox" value="percantage_area_reductions">
                    </div>
                    <div class="px-3">
                        <label for="stress" class="text-sm text-white font-sans tracking-wide">Stress</label>
                        <input type="checkbox" name="stress" id="" class="form-checkbox" value="stress">
                    </div>
                    <div class="px-3">
                        <label for="strain" class="text-sm text-white font-sans tracking-wide">Strain</label>
                        <input type="checkbox" name="strain" id="" class="form-checkbox" value="strain">
                    </div>
                </div>

                <button class="btn_teal-600 text-white text-sm font-sans tracking-wide mt-6" type="submit">Submit</button>

            </form>
        </div>
    </section>
</template>