import { useNavigate } from "react-router-dom";
import { HeaderComponents } from ".";
import PropTypes from "prop-types";

const UKTCardPusat = ({ cabangdojang, nomorPengajuan, lokasiUjian, tanggalPelaksanaan }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('/laporanUKTGeup/detail-laporan', {
            state: { cabangdojang, nomorPengajuan, lokasiUjian, tanggalPelaksanaan }
        });
    };

    return (
        <>
            <HeaderComponents title={"Dojang"} cabangdojang={cabangdojang} />
            <div className="text-xs grid grid-cols-1 gap-y-2 md:text-base lg:text-lg">
                <div className="col-span-1 flex justify-between">
                    <h4 className="text-opacity-20">Nomor Pengajuan</h4>
                    <p className="font-semibold">{nomorPengajuan}</p>
                </div>
                <div className="col-span-1 flex justify-between">
                    <h4 className="text-opacity-20">Lokasi Ujian</h4>
                    <p className="font-semibold">{lokasiUjian}</p>
                </div>
                <div className="col-span-1 flex justify-between">
                    <h4 className="text-opacity-20">Tanggal Pelaksanaan</h4>
                    <p className="font-semibold">{tanggalPelaksanaan}</p>
                </div>
            </div>

            <button
                className="w-full font-semibold py-2 px-4 border-2 border-black rounded-md mt-4 hover:bg-black hover:text-white"
                onClick={handleDetailClick}
            >
                Lihat Detail
            </button>
        </>
    );
}

UKTCardPusat.propTypes = {
    title: PropTypes.string.isRequired,
    cabangdojang: PropTypes.string.isRequired,
    nomorPengajuan: PropTypes.string.isRequired,
    lokasiUjian: PropTypes.string.isRequired,
    tanggalPelaksanaan: PropTypes.string.isRequired,
};

export default UKTCardPusat;
