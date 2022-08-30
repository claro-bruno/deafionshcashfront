import { useFormContext } from 'react-hook-form'
import useFormate from '../../../hooks/useFormate'

export default function AddressComponent({
  secondaryAddress = false,
}: {
  secondaryAddress: boolean
}) {
  const { register, watch } = useFormContext()
  const { formatZipCode } = useFormate()
  return (
    <div className="inputsAndLabelsContainer h-[13rem] items-center">
      <div className="flex flex-col gap-2">
        <label className="labelsDefault">
          Address *
          <input
            {...register(
              secondaryAddress
                ? 'secondaryAddress.address'
                : 'primaryAddress.address',
            )}
            inputMode="numeric"
            className="inputsDefault"
            type="text"
            required
          />
        </label>
        <label className="labelsDefault">
          State *
          <input
            {...register(
              secondaryAddress
                ? 'secondaryAddress.state'
                : 'primaryAddress.state',
            )}
            className="inputsDefault"
            type="text"
            required
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label className="labelsDefault">
          Zip-code *
          <input
            {...register(
              secondaryAddress
                ? 'secondaryAddress.zipcode'
                : 'primaryAddress.zipcode',
            )}
            value={formatZipCode(
              watch(
                secondaryAddress
                  ? 'secondaryAddress.zipcode'
                  : 'primaryAddress.zipcode',
              ),
            )}
            inputMode="numeric"
            className="inputsDefault"
            type="text"
            maxLength={20}
            required
          />
        </label>
        <label className="labelsDefault">
          City *
          <input
            {...register(
              secondaryAddress
                ? 'secondaryAddress.city'
                : 'primaryAddress.city',
            )}
            className="inputsDefault"
            type="text"
            required
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label className="labelsDefault ">
          <div className="flex items-start">Proof of address</div>

          <input type="file" className="fileInput" />
        </label>
      </div>
    </div>
  )
}
