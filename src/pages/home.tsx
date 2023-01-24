/* eslint-disable max-lines */
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';

interface IMockDataIsSelectedType {
  text: string;
  content: ReactNode;
  selected: boolean;
  extraClass?: string;
  animationButtonStyles?: string;
}

const mockDataCursor: IMockDataIsSelectedType[] = [
  {
    text: 'cursor-default',
    extraClass: 'cursor-default',
    content: <div />,
    selected: true,
  },

  {
    text: 'cursor-pointer',
    extraClass: 'cursor-pointer',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-wait',
    extraClass: 'cursor-wait',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-text',
    extraClass: 'cursor-text',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-move',
    extraClass: 'cursor-move',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-help',
    extraClass: 'cursor-help',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-not-allowed',
    extraClass: 'cursor-not-allowed',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-none',
    extraClass: 'cursor-none',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-context-menu',
    extraClass: 'cursor-context-menu',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-progress',
    extraClass: 'cursor-progress',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-cell',
    extraClass: 'cursor-cell',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-crosshair',
    extraClass: 'cursor-crosshair',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-vertical-text',
    extraClass: 'cursor-vertical-text',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-alias',
    extraClass: 'cursor-alias',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-copy',
    extraClass: 'cursor-copy',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-grab',
    extraClass: 'cursor-grab',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-grabbing',
    extraClass: 'cursor-grabbing',
    content: <div />,
    selected: true,
  },

  {
    text: 'cursor-all-scroll',
    extraClass: 'cursor-all-scroll',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-col-resize',
    extraClass: 'cursor-col-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-row-resize',
    extraClass: 'cursor-row-resize',
    content: <div />,
    selected: true,
  },

  {
    text: 'cursor-n-resize',
    extraClass: 'cursor-n-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-e-resize',
    extraClass: 'cursor-e-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-s-resize',
    extraClass: 'cursor-s-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-nw-resize',
    extraClass: 'cursor-nw-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-w-resize',
    extraClass: 'cursor-w-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-ne-resize',
    extraClass: 'cursor-ne-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-se-resize',
    extraClass: 'cursor-se-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-sw-resize',
    extraClass: 'cursor-sw-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-ew-resize',
    extraClass: 'cursor-ew-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-ns-resize',
    extraClass: 'cursor-ns-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-nesw-resize',
    extraClass: 'cursor-nesw-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-nwse-resize',
    extraClass: 'cursor-nwse-resize',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-none',
    extraClass: 'cursor-none',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-zoom-in',
    extraClass: 'cursor-zoom-in',
    content: <div />,
    selected: true,
  },
  {
    text: 'cursor-zoom-out',
    extraClass: 'cursor-zoom-out',
    content: <div />,
    selected: true,
  },
];

const mockDataIsSelected: IMockDataIsSelectedType[] = [
  {
    text: 'Sim',
    content: <div className="text-white text-md py-2">Você pode me selecionar</div>,
    selected: true,
  },
  {
    text: 'Não',
    content: <div className="text-white text-md py-2 select-none">Você não pode me selecionar!</div>,
    selected: true,
  },
];

const mockDataOnFocus: IMockDataIsSelectedType[] = [
  {
    text: 'Outline',
    content: (
      <div className="text-white text-md py-2">
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-gray-500 w-full bg-transparent focus:outline-teal-500"
        />
      </div>
    ),
    selected: true,
  },
  {
    text: 'Sem Outline',
    content: (
      <div className="text-white text-md py-2">
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-gray-500 w-full bg-transparent focus:outline-none"
        />
      </div>
    ),
    selected: true,
  },
  {
    text: 'Outro',
    content: (
      <div className="text-white text-md py-2 select-none">
        <input type="text" name="" id="" className="border-2 border-gray-500 w-full bg-transparent " />
      </div>
    ),
    selected: true,
  },
];

const mockDataIsHover: IMockDataIsSelectedType[] = [
  {
    text: 'Scale +',
    animationButtonStyles: 'transition-all duration-150 hover:scale-105',
    content: <div />,
    selected: true,
  },
  {
    text: 'Scale -',
    animationButtonStyles: 'transition-all duration-150 hover:scale-95',
    content: <div />,
    selected: true,
  },

  {
    text: 'Colors',
    animationButtonStyles: 'transition-all duration-150 hover:bg-teal-500',
    content: <div />,
    selected: true,
  },

  {
    text: 'Outro',
    content: <div />,
    selected: true,
  },
];

const mockDataOnDisabled: IMockDataIsSelectedType[] = [
  {
    text: 'Sim',
    content: <div />,
    selected: true,
  },
  {
    text: 'Não',
    content: <div />,
    selected: true,
  },
  {
    text: 'Não Precisa',
    content: <div />,
    selected: true,
  },
];

const mockDataOnError: IMockDataIsSelectedType[] = [
  {
    text: 'Sim',
    content: <div />,
    selected: true,
  },
  {
    text: 'Não',
    content: <div />,
    selected: true,
  },
  {
    text: 'Não Precisa',
    content: <div />,
    selected: true,
  },
];

const mockDataIsResizable: IMockDataIsSelectedType[] = [
  {
    text: 'resize-none',
    content: (
      <div>
        <textarea className="resize-none rounded-md bg-transparent border-2 border-gray-500 w-full mt-2" />
      </div>
    ),
    selected: true,
  },

  {
    text: 'resize',
    content: (
      <div>
        <textarea className="resize rounded-md bg-transparent border-2 border-gray-500 w-full mt-2" />
      </div>
    ),
    selected: true,
  },
  {
    text: 'resize-y',
    content: (
      <div>
        <textarea className="resize-y rounded-md bg-transparent border-2 border-gray-500 w-full mt-2" />
      </div>
    ),
    selected: true,
  },
  {
    text: 'resize-x',
    content: (
      <div>
        <textarea className="resize-x rounded-md bg-transparent border-2 border-gray-500 w-full mt-2" />
      </div>
    ),
    selected: true,
  },
];

const mockImageIsDraggable: IMockDataIsSelectedType[] = [
  {
    text: 'Sim',
    content: (
      <div>
        <div className="text-white pt-2">Tente arrastar a imagem</div>
        <img
          className="text-white text-md py-2 object-cover"
          src="./mock.webp"
          width={720}
          height={960}
          draggable
          alt=""
        />
      </div>
    ),
    selected: true,
  },
  {
    text: 'Não',
    content: (
      <div>
        <div className="text-white pt-2">Tente arrastar a imagem</div>
        <img
          className="text-white text-md py-2 object-cover"
          src="./mock.webp"
          width={720}
          height={960}
          draggable={false}
          alt=""
        />
      </div>
    ),
    selected: true,
  },
];

const ItemTaskOneOK = ({
  dataCursor,
  handleUpdate,
}: {
  dataCursor: IMockDataIsSelectedType[];
  handleUpdate: (textButton: string) => void;
}): ReactElement => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {dataCursor.map((item: IMockDataIsSelectedType) => {
        return (
          <div key={item.text}>
            <div
              className={`${
                item.animationButtonStyles
                  ? item.animationButtonStyles
                  : 'duration-700 md:hover:scale-105 hover:duration-150 transition-all'
              } flex  ${item.selected ? 'bg-[#3d4046]' : 'bg-[#2d3036]'}`}>
              <button
                type="button"
                onClick={(): void => handleUpdate(item.text)}
                className={`border-l-4  pl-4 pr-7 py-2 flex-1 text-left text-lg capitalize select-none ${
                  item.selected ? ' border-l-gray-500 text-gray-500' : 'border-l-teal-500 text-white'
                }

            ${item.extraClass || ''}
            `}>
                {item.text}
              </button>
            </div>
            {item.content}
          </div>
        );
      })}
    </div>
  );
};

const handleUpdateStatus = (
  textButton: string,
  data: IMockDataIsSelectedType[],
  setData: Dispatch<SetStateAction<IMockDataIsSelectedType[]>>,
): void => {
  const dataIsSelectedToUpdate: IMockDataIsSelectedType[] = data.map((item: IMockDataIsSelectedType) => {
    if (item.text === textButton) {
      return {
        ...item,
        selected: false,
      };
    }

    return {
      ...item,
      selected: true,
    };
  });

  setData(dataIsSelectedToUpdate);
};

export const HomePage = (): ReactElement => {
  const [dataIsSelected, setDataIsSelected] = useState<IMockDataIsSelectedType[]>(mockDataIsSelected);
  const [dataCursor, setDataCursor] = useState<IMockDataIsSelectedType[]>(mockDataCursor);
  const [ImageIsDraggable, setImageIsDraggable] = useState<IMockDataIsSelectedType[]>(mockImageIsDraggable);
  const [dataIsHover, setDataIsHover] = useState<IMockDataIsSelectedType[]>(mockDataIsHover);
  const [dataOnfocus, setDataOnfocus] = useState<IMockDataIsSelectedType[]>(mockDataOnFocus);
  const [dataOnDisabled, setDataOnDisabled] = useState<IMockDataIsSelectedType[]>(mockDataOnDisabled);
  const [dataOnError, setDataOnError] = useState<IMockDataIsSelectedType[]>(mockDataOnError);
  const [dataResizable, setDataResizable] = useState<IMockDataIsSelectedType[]>(mockDataIsResizable);

  return (
    <div className="rounded-md shadow-md flex flex-col items-center py-8 min-h-screen">
      <div className="max-w-[50rem] mt-[8rem] w-full px-3">
        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">
              Componente é selecionável?
            </h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataIsSelected}
            handleUpdate={(textButton: string): void =>
              handleUpdateStatus(textButton, dataIsSelected, setDataIsSelected)
            }
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">Qual será o cursor?</h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataCursor}
            handleUpdate={(textButton: string): void => handleUpdateStatus(textButton, dataCursor, setDataCursor)}
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">É arrastável?</h3>
          </div>

          <ItemTaskOneOK
            dataCursor={ImageIsDraggable}
            handleUpdate={(textButton: string): void =>
              handleUpdateStatus(textButton, ImageIsDraggable, setImageIsDraggable)
            }
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">
              Ao passar o mouse no desktop (hover)?
            </h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataIsHover}
            handleUpdate={(textButton: string): void => handleUpdateStatus(textButton, dataIsHover, setDataIsHover)}
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">Ao Focar o input</h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataOnfocus}
            handleUpdate={(textButton: string): void => handleUpdateStatus(textButton, dataOnfocus, setDataOnfocus)}
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">
              Já fez quando estiver desabilitado?
            </h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataOnDisabled}
            handleUpdate={(textButton: string): void =>
              handleUpdateStatus(textButton, dataOnDisabled, setDataOnDisabled)
            }
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">
              Já fez quando tiver erro?
            </h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataOnError}
            handleUpdate={(textButton: string): void => handleUpdateStatus(textButton, dataOnError, setDataOnError)}
          />
        </div>

        <div className="mt-16">
          <div>
            <h3 className="text-gray-200 text-xl border-b-2 border-teal-500 mb-2 uppercase">
              Pode ser redimensionado?
            </h3>
          </div>

          <ItemTaskOneOK
            dataCursor={dataResizable}
            handleUpdate={(textButton: string): void => handleUpdateStatus(textButton, dataResizable, setDataResizable)}
          />
        </div>
      </div>

      <div className="h-[10rem]" />
    </div>
  );
};
