export default function RiwayatPendidikan() {
    return (
      <div className="container mx-auto p-4 text-center pt-20">
        <h2 className="text-3xl font-bold mb-6 text-primary">Riwayat Pendidikan</h2>
        <div className="space-y-8">
          <RowRiwayat jenjang="SD" sekolah="SDN Pamoyanan" tahun="2009-2015" />
          <RowRiwayat jenjang="SMP" sekolah="SMPN 2 Rancaekek" tahun="2015-2018" />
          <RowRiwayat jenjang="SMK" sekolah="SMK Guna Dharma Nusantara" tahun="2018-2021" />
          <RowRiwayat jenjang="S1" sekolah="Universitas Ma'soem" tahun="2022-Sekarang" />
        </div>
      </div>
    );
  }
  
  interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }
  
  function RowRiwayat(props: RowRiwayatProps) {
    return (
      <div className="card bg-base-200 shadow-lg border border-base-300 rounded-xl hover:scale-105 transition-transform duration-200 ease-out">
        <div className="card-body p-6">
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="badge bg-gradient-to-r from-primary to-secondary text-white text-lg p-3 rounded-md shadow-lg">{props.jenjang}</div>
            <div className="flex-grow border-l border-base-300 pl-4 md:pl-8">
              <div className="font-semibold text-lg md:text-xl text-base-content">{props.sekolah}</div>
              <div className="text-sm md:text-md text-base-content/70">{props.tahun}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  