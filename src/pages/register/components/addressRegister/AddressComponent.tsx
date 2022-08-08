import { useFormContext } from 'react-hook-form'
import useFormate from '../../../../hooks/useFormate'

export default function AddressComponent() {
  const { register, watch } = useFormContext()
  const { formatZipCode } = useFormate()
  return (
    <div className="inputsAndLabelsContainer h-[13rem] items-center">
      <div className="flex flex-col gap-2">
        <label className="labelsDefault">
          Address
          <input
            {...register('address.address')}
            inputMode="numeric"
            className="inputsDefault"
            type="text"
          />
        </label>
        <label className="labelsDefault">
          Street
          <input
            {...register('address.street')}
            className="inputsDefault"
            type="text"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label className="labelsDefault">
          State
          <input
            {...register('address.state')}
            className="inputsDefault"
            type="text"
          />
        </label>
        <label className="labelsDefault">
          Zip-code
          <input
            {...register('address.zip')}
            value={formatZipCode(watch('address.zip'))}
            inputMode="numeric"
            pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
            className="inputsDefault"
            type="text"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label className="labelsDefault">
          City
          <input
            {...register('address.city')}
            className="inputsDefault"
            type="text"
          />
        </label>
        <label className="labelsDefault ">
          Residency proof
          <input
            {...register('residencyProof')}
            type="file"
            className="fileInput"
          />
        </label>
      </div>
    </div>
  )
}
