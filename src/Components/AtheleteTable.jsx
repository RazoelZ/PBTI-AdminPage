/**
 * AthleteTable component renders a table displaying a list of athletes with their details.
 * It includes columns for member number, athlete name, address, and status.
 * 
 * @component
 * @returns {JSX.Element} The rendered table of athletes.
 */
const AthleteTable = () => {
    // Sample data for athletes
    const athletes = [
        {
            nomor: "TKO-135/130624/01",
            nama: 'Amelia Tan',
            alamat: 'Centro City Residence No. 412, Jl. Daan Mogot II No.Kav. 4-5, RT.10/RW.1, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta',
            status: 'Active'
        },
        {
            nomor: "TKO-135/130624/01",
            nama: 'Amelia Tan',
            alamat: 'Centro City Residence No. 412, Jl. Daan Mogot II No.Kav. 4-5, RT.10/RW.1, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta',
            status: 'Active'
        },
        {
            nomor: "TKO-135/130624/01",
            nama: 'Amelia Tan',
            alamat: 'Centro City Residence No. 412, Jl. Daan Mogot II No.Kav. 4-5, RT.10/RW.1, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta',
            status: 'Active'
        },
        {
            nomor: "TKO-135/130624/01",
            nama: 'Amelia Tan',
            alamat: 'Centro City Residence No. 412, Jl. Daan Mogot II No.Kav. 4-5, RT.10/RW.1, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta',
            status: 'Active'
        },
        // Add more athletes as needed
    ];

    return (
        <div className="overflow-hidden">
            <table className="min-w-full bg-white">
                <thead className='bg-[#F7F8FA] '>
                    <tr>
                        <th className="text-left py-5 px-4">Nomor Anggota</th>
                        <th className="text-left py-5 px-4">Nama Atlet</th>
                        <th className="hidden md:table-cell text-left py-5 px-4">Alamat</th>
                        <th className="hidden md:table-cell text-left py-5 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {athletes.map((athlete, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-2 px-4 w-1/5">{athlete.nomor}</td>
                            <td className="py-2 px-4 w-1/5">{athlete.nama}</td>
                            <td className="hidden md:table-cell py-2 px-4 w-2/5">{athlete.alamat}</td>
                            <td className="hidden md:table-cell w-1/5 py-2 px-4">
                                <span className={`px-6 py-3 font-semibold rounded-full ${athlete.status === 'Active' ? 'bg-[#D1FAE5] text-[#10B981]' : 'bg-[#FEE2E2] text-[#EF4444]'}`}>
                                    {athlete.status}
                                </span>
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

export default AthleteTable;
