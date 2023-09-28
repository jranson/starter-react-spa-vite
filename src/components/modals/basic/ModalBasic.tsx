import { useEffect, useMemo, useState } from 'react'
import { ButtonBasic } from '../../controls/Buttons/ButtonBasic/ButtonBasic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ModalBasic.css'

export type ButtonConfig = {
  title: string
  onClick: any
  className: string
  skipClose?: boolean
  disabled?: boolean
}

type ModalBasicProps = {
  scrollable?: boolean,
  sz?: string,
  closer?: any,
  headerContent?: any,
  headerText?: string,
  headerIcon?: any,
  bodyText?: string,
  closeLabel?: string,
  closeButtonClass?: string,
  wideCloseButton?: boolean,
  hideClose?: boolean,
  hideFooter?: boolean,
  footerClass?: string,
  buttons?: any
  buttonConfigs?: ButtonConfig[]
  children?: any
  closeable?: boolean
}

export default function ModalBasic(props: ModalBasicProps) {

  const [isClosing, setIsClosing] = useState(false)

  const { scrollable, sz, wideCloseButton, closeButtonClass, footerClass } = props

  const close = () => {
    if (props.closeable === false) {
      return
    }
    setIsClosing(true)
    setTimeout(props.closer, 195)
  }

  const scrollableClass = useMemo(() => {
    if (scrollable) {
      return "scrollable-modal"
    }
    return ""
  }, [scrollable])

  const wrapperClass = useMemo(() => {
    if (sz === 'fs') {
      return 'basic-modal-wrapper-fs'
    }
    return 'basic-modal-wrapper'
  }, [sz])

  const modalMaskClass = useMemo(() => {
    const base = 'basic-modal-mask'
    if (isClosing) {
      return `${base} basic-modal-closing`
    }
    return base
  }, [isClosing])

  const modalClass = useMemo(() => {
    let classes = 'basic-modal-container'
    if (isClosing) {
      classes = `${classes} basic-modal-closing`
    }
    if (props.sz === 'sm') {
      return `${classes} basic-modal-sm`
    }
    if (props.sz === 'lg') {
      return `${classes} basic-modal-lg`
    }
    if (props.sz === 'xl') {
      return `${classes} basic-modal-xl`
    }
    if (props.sz === 'fs') {
      return `${classes} basic-modal-fs`
    }
    return `${classes} basic-modal-md`
  }, [isClosing])

  const computedCloseButtonClass = useMemo(() => {
    if (wideCloseButton) {
      return `${closeButtonClass} wide`
    }
    return closeButtonClass
  }, [wideCloseButton, closeButtonClass])

  const computedFooterClass = useMemo(() => {
    const base = 'basic-modal-footer'
    if (footerClass) {
      return `${base} ${footerClass}`
    }
    return base
  }, [footerClass])

  const handleKeyPress = (e: any) => {
    if (props.closer && e.code === 'Escape') {
      close()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
    document.removeEventListener('keydown', handleKeyPress)
    }
  })

  //   componentDidMount() {
//     document.addEventListener('keydown', handleKeyPress)
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', handleKeyPress)
//   }


  return (
    <div className={modalMaskClass}>
      <div className={wrapperClass}>
        <div className={modalClass}>
          <div className="basic-modal-header d-flex align-items-center pb-1">
            {props.headerIcon &&
              <FontAwesomeIcon
                icon={props.headerIcon}
                className="basic-modal-header-icon ms-1 me-3"
              />
            }
            {props.headerText &&
              <h5 className="me-auto">
                {props.headerText}
              </h5>
            }
            {props.headerContent && !props.headerText &&
              <props.headerContent />
            }
          </div>
          <div className={scrollableClass}>
            {props.bodyText && !props.children &&
              <div className="basic-modal-body font-reduce-1">
                {props.bodyText}
              </div>
            }
            {props.children && !props.bodyText &&
              <div className="basic-modal-body font-reduce-1">
                {props.children}
              </div>
            }
            {!props.hideFooter &&
              <div className={computedFooterClass}>
                {props.buttonConfigs &&
                  props.buttonConfigs.map((button) => {
                    return (
                      <ButtonBasic
                        disabled={button.disabled}
                        key={button.title}
                        className={button.className}
                        label={button.title}
                        onClick={() => { if (button.onClick) { button.onClick() }; if (!button.skipClose) { close() } }}
                      />
                    )
                  })
                }
                {props.buttons &&
                  <props.buttons />
                }
                {!props.hideClose &&
                  <ButtonBasic
                    className={computedCloseButtonClass}
                    label={props.closeLabel || "Close"}
                    onClick={close}
                    disabled={props.closeable === false}
                  />
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
