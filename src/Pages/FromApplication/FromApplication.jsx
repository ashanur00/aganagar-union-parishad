import React from 'react';

const FromApplication = () => {
    return (
        <div>
            <p className='text-red-600 font-semibold m-5 text-center border-b-2 '>সম্মানিত নাগরিক, আপনার নাগরিক সকল সনদ পাওয়ার জন্য নাগরিক সনদে ক্লিক করে আপনার প্রয়োজনীয় সনদ সিলেক্ট করে সাবমিট বাটন ক্লিক করে ট্রেকিং নাম্বার নিয়ে ইউনিয়ন পরিষদ যোগাযোগ করুন।ওয়ারিশ
                পারিবারিক বা ট্রেড লাইসেন্স আবেদন করে ট্রেকিং নাম্বার নিয়ে ইউনিয়ন যোগাযোগ করুন</p>

            {/* from boddy */}

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>আবেদন সেবা</span></span>
                    </div>
                    <select className="select select-bordered">
                        <option disabled selected>নাগরিকত্ব সনদ</option>
                        <option>নাগরিকত্ব সনদ</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold ">ছবি</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">জন্ম তারিখ</span>
                    </div>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">জন্ম নিবন্ধন নং</span>

                    </div>
                    <input type="text" placeholder="জন্ম নিবন্ধন নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">জাতীয় পরিচয়পত্র নং</span>
                    </div>
                    <input type="text" placeholder="জাতীয় পরিচয়পত্র নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">পিতার জাতীয় পরিচয়পত্র নং</span>
                    </div>
                    <input type="text" placeholder="পিতার জাতীয় পরিচয়পত্র নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">মাতার জাতীয় পরিচয়পত্র নং</span>
                    </div>
                    <input type="text" placeholder="মাতার জাতীয় পরিচয়পত্র নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">পাসপোর্ট নং</span>
                    </div>
                    <input type="text" placeholder="পাসপোর্ট নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">মোবাইল নং*</span>
                    </div>
                    <input type="text" placeholder="মোবাইল নং*" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">ইমেইল নং</span>
                    </div>
                    <input type="text" placeholder="ইমেইল নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>লিঙ্গ</span></span>
                    </div>
                    <select className="select select-bordered">
                        <option disabled selected>লিঙ্গ সিলেক্ট করুন</option>
                        <option>পুরুষ</option>
                        <option>মহিলা</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold'>ধর্ম</span></span>
                    </div>
                    <select className="select select-bordered">
                        <option disabled selected>ধর্ম সিলেক্ট করুন</option>
                        <option>ইসলাম</option>
                        <option>হিন্দু</option>
                        <option>বৌদ্ধ</option>
                        <option>খ্রিস্ট</option>
                        <option>অন্যান্য</option>
                    </select>
                </label>

            </div>
        </div>
    );
};

export default FromApplication;