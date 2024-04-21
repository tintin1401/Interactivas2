import "./index.css";

export function CalenderComponent() {
    return (
        <div class="flex items-center justify-center py-8 px-4">    
            <div class="w-[50vw] shadow-lg">
                <div class="md:p-8 p-5 bg-slate-300 rounded-t">
                    <div class="px-4 flex items-center justify-between">
                        <span tabindex="0"
                            class="current-date font-semibold text-2xl text-blue-700"></span>
                        <div class="flex items-center icons">
                            <button aria-label="calendar backward"
                                class="focus:text-gray-400 hover:text-gray-400 text-gray-800 ">
                                <svg id="prev" xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <button aria-label="calendar forward"
                                class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 ">
                                <svg id="next" xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
    
                        </div>
                    </div>
    
                    <div class="flex items-center justify-between pt-12 overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="grid grid-cols-7">
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">SU</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">MON</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">TUE</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">WED</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">THU</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">FRI</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center">SA</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr >
                                    <td class="days pt-6  grid grid-cols-7 ">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        </div>
                                        
                                    </td>
                                </tr>
    
                                
                            </tbody>
                        </table>
                    </div>
    
                </div>
    
            </div>
        </div>
    );
  }