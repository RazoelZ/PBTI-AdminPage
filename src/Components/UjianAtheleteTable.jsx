/**
 * UjianAthleteTable component to display a table of athletes and their exam status.
 *
 * @component
 * @returns {JSX.Element} The rendered UjianAthleteTable component
 */
const UjianAthleteTable = () => {
    // Sample data for athletes
    const athletes = [
        { nomor: "TKO-135/130624/01", nama: 'Amelia Tan', tingkat: "Geup 10 ke 9 - Sabuk Putih" },
        { nomor: "TKO-135/130624/01", nama: 'Amelia Tan', tingkat: "Geup 10 ke 9 - Sabuk Putih" },
        { nomor: "TKO-135/130624/01", nama: 'Amelia Tan', tingkat: "Geup 10 ke 9 - Sabuk Putih" }
        // Add more athletes as needed
    ];

    return (
        <div className="overflow-hidden">
            <table className="min-w-full bg-white">
                <thead className='bg-[#F7F8FA] '>
                    <tr>
                        <th className="text-left py-5 px-4">Nomor Anggota</th>
                        <th className="text-left py-5 px-4">Nama Atlet</th>
                        <th className="hidden md:table-cell text-left py-5 px-4">Tingkat Geup</th>
                        <th className="hidden md:table-cell text-left py-5 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {athletes.map((athlete, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-2 px-4 w-1/5">{athlete.nomor}</td>
                            <td className="py-2 px-4 w-1/5">{athlete.nama}</td>
                            <td className="hidden md:table-cell py-2 px-4 w-1/5">{athlete.tingkat}</td>
                            <td className="hidden md:table-cell w-2/5 py-2 px-4">
                                <div className='flex space-x-10'>
                                    <button className="px-6 py-3 font-semibold border-2 border-[#B8EAD3] text-[#10B981] hover:bg-[#D1FAE5]">
                                        Lulus Ujian
                                    </button>
                                    <button className="px-6 py-3 font-semibold border-2 border-[#FECACA] text-[#EF4444] hover:bg-[#FEE2E2]">
                                        Gagal Ujian
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <button className="w-full py-3 mt-2 bg-white border border-[#B2B9C3] hover:bg-[#F7F8FA]">
                    Lihat Lebih Banyak
                </button>
            </div>
        </div>
    );
};

export default UjianAthleteTable;
