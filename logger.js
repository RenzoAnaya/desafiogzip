import log4js from 'log4js'
import 'dotenv/config'

log4js.configure({
    appenders:{
        consola:{type:'console'},
        debugFile:{type:'file', filename:'debugFile.log'},
        debugError:{type:'file', filename:'debugError.log'},
        warnFile:{type:'file', filename:'warn.log'},
        errorFile:{type:'file', filename:'error.log'},
        debugFileLevel:{type:'logLevelFilter', appender:'debugFile', level:'debugFile', filename:''},
        errorFileLevel:{type:'logLevelFilter', appender:'errorFile', level:'debugError', filename:''}
    },
    categories:{
        default:{
            appenders:['consola'], level:'all'
        },
        prod:{
            appenders:['warnFile','errorFile'], level:'all'
        }
    }
})


let logger = null

if(process.env.NODE_ENV === 'PROD') {
    logger = log4js.getLogger('prod')
} else {
    logger = log4js.getLogger()
}

export default logger