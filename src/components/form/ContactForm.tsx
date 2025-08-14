import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>

      {/* form */}
      <form action="#" method="POST" className="space-y-6">
        <input type="hidden" name="_token" value="YYI4gLOUH45YiMWMPPuBT8jAiuGiUG4T3zM9peqw" autoComplete="off" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap*</label>
            <input type="text" id="name" name="name" defaultValue="" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
            <input type="email" id="email" name="email" defaultValue="" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
          <input type="tel" id="phone" name="phone" defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subjek *</label>
          <input type="text" id="subject" name="subject" defaultValue="" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
          <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
          <i className="fas fa-paper-plane mr-2"></i>
          Kirim Pesan
        </button>
      </form>
    </div>
  )
}

export default ContactForm